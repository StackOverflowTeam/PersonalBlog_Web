<template>
  <el-dialog
    @opened="openDialog"
    :width="dialogWidth"
    :title="title"
    :visible.sync="showEditDialog"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <el-form
      :model="forms"
      :rules="rules"
      ref="editForms"
      class="edit-forms"
      label-position="left"
      :label-width="labelWidth"
    >
      <el-form-item label="分类名称" prop="categoryName">
        <el-input v-model="forms.categoryName"></el-input>
      </el-form-item>
      <!--不可填 ，自动生成 或者不显示出来-->
      <el-form-item label="添加时间" prop="date">
        <!--   {{currentTime}} -->
        <el-input v-model="forms.createTime" readonly></el-input>
      </el-form-item>

      <el-form-item label="分类图标" prop="picName">
        <el-upload
          name="picture"
          class="avatar-uploader"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :action="qiNiu"
        >
        <!--action要改  :action="serverApiUrl+'/upload/uploadGoodsImg'"-->
          <img v-if="forms.url" :src="forms.url" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <!-- 取消的同时要消除页面数据-->
      <el-button type="infor" size="small" @click="$emit('close')" icon="el-icon-error">取消</el-button>
      <!---->
      <el-button type="primary" size="small" @click="submit" icon="el-icon-success">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {
  //规则引入
  Required,
  FillerFieldRules
} from "@/utils/validateRules";
// import { serverApiUrl }from "@/config/apiUrl";
import { qiNiu } from "@/config/apiUrl";


import { fillerLeft } from "@/utils/common";
import {  resetObject } from "@/utils/common";

import { categorySave } from "@/api/modelManage/category";

export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    dialogWidth: {
      type: String,
      default: "700px"
    },
    labelWidth: {
      type: String,
      default: "120px"
    },
    showEditDialog: Boolean
  },
  data() {
    return {
      timer: "", // 定义一个定时器的变量
      forms: {
        categoryName: "",
        createTime: "",
        url: "", //预览图片完整路径
        // picName: "" //保存到数据库的图片名称
      },
      qiNiu:qiNiu,
      rules: {
        ...FillerFieldRules(["categoryName"], Required)
      }
      // serverApiUrl:serverApiUrl,
      //  CatagoryData:[]
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.forms.createTime = this.$dateFormat(
        new Date(),
        "yyyy-mm-dd H:MM:ss"
      );
    }, 1000);
    // this.initData()//页面加载就初始化商品数据，默认选第一页的数据
  },
  methods: {

    submit() {
     this.$refs.editForms.validate(valid => {
       if (valid) {
         this.$message({
           message: "字段验证通过，提交请求，成功后刷新分页！",
           type: "success"
         });
         // this.$emit("success"); //通知列表分页刷新
         categorySave(this.forms)
           .then(r => {
             this.$message({
               message: r.msg,
               type: "success"
             });
             // this.$emit("success");
             this.$parent.showEditDialog = false; //成功后关闭添加窗口
             this.$parent.initData();
             //location.reload  数据和组件所有刷新，组件重构
           })
           .catch(() => {});
       } else {
         this.$message({
           message: "请按照提示正确填写内容！",
           type: "warning"
         });
         return false;
       }
     });
    },

    handleAvatarSuccess(res, file) {
      console.log(res);
      console.log(file);
      this.$message({
        type: "info",
        message: "图片上传成功",
        duration: 6000
      });
      if (file.response.status == "success") {
        this.forms.img = file.response.msg; //上传图片成功之后保存图片的名称
        this.forms.url = URL.createObjectURL(file.raw);
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isGIF = file.type === "image/gif";
      const isPNG = file.type === "image/png";
      const isBMP = file.type === "image/bmp";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG && !isGIF && !isPNG && !isBMP) {
        this.$message.error("上传图片格式有误");
      }
      if (!isLt2M) {
        this.$message.error("上传图片不能超过2MB！");
      }
      return (isJPG || isBMP || isGIF || isPNG) && isLt2M;
    },

    openDialog() {
      this.title = "添加";
      resetObject(this.forms);
      this.$set(this.forms, "id", null);
      this.$refs.editForms.resetFields();
      // if(this.$parent.id != null){//修改
      //     this.title="编辑商品";
      // getGoods({id:this.$parent.id })
      // 	.then(r=>{//获取商品类型列表
      //   this.FillerFormField(this.$parent.id ,r);
      //   this.forms.url = this.$parent.serverImageUrl+r.imgpath;
      //   this.$parent.id = null;
      //   }).catch(()=>{});
      // // }else{//新增
      //     this.title="添加商品";
      // 	resetObject(this.forms);
      // 	this.$set(this.forms, "id", null);
      // 	this.$refs.editForms.resetFields();
      // }
    },
    FillerFormField(id, data) {
      //可以外部填充回写做编辑用，也可以请求详情接口填充表单
      this.$set(this.forms, "id", id);
      fillerLeft(this.forms, data);
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
  }
};
</script>
<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>


