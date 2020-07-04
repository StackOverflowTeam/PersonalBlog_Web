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
      <el-form-item label="网站名称" prop="title">
        <el-input v-model="forms.title"></el-input>
      </el-form-item>
      <el-form-item label="网站链接" prop="link">
        <el-input v-model="forms.link"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="des">
        <el-input v-model="forms.des"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="index">
        <el-input v-model="forms.index"></el-input>
      </el-form-item>
      <el-form-item label="添加时间" prop="date">
        <el-input v-model="forms.date"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="infor" size="small" @click="$emit('close')" icon="el-icon-error">取消</el-button>
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
import { fillerLeft } from "@/utils/common";
// import { saveGoods,getGoods } from "@/api/goodsManage/list";


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
      forms: {
        title: "",
        link: "",
        des: "",
        index: "",
        date: ""
      },
      rules: {
        ...FillerFieldRules(["title"], Required)
      }
      // serverApiUrl:serverApiUrl,
      //  CatagoryData:[]
    };
  },
  // created() {
  //   this.initData();
  // },
  methods: {
    

    submit() {
      this.$refs.editForms.validate(valid => {
        if (valid) {
          this.$message({
            message: "字段验证通过，提交请求，成功后刷新分页！",
            type: "success"
          });
          //this.$emit("success"); //通知列表分页刷新
          //      saveGoods(this.forms)
          //        .then(r => {
          // this.$message({
          //   message: r.msg,
          //   type: "success"
          // });
          //          // this.$emit("success");
          // this.$parent.refresh();
          // this.$parent.showEditDialog=false;//成功后关闭添加窗口
          // //location.reload  数据和组件所有刷新，组件重构
          //        })
          //        .catch(() => {});
        } else {
          this.$message({
            message: "请按照提示正确填写内容！",
            type: "warning"
          });
          return false;
        }
      });
    },

    //   openDialog() {
    // if(this.$parent.id != null){//修改
    //     this.title="编辑商品";
    // 	getGoods({id:this.$parent.id })
    // 	.then(r=>{//获取商品类型列表
    //   this.FillerFormField(this.$parent.id ,r);
    //   this.forms.url = this.$parent.serverImageUrl+r.imgpath;
    //   this.$parent.id = null;
    //   }).catch(()=>{});
    // }else{//新增
    //     this.title="添加商品";
    // 	resetObject(this.forms);
    // 	this.$set(this.forms, "id", null);
    // 	this.$refs.editForms.resetFields();
    // }

    //   },
    FillerFormField(id, data) {
      //可以外部填充回写做编辑用，也可以请求详情接口填充表单
      this.$set(this.forms, "id", id);
      fillerLeft(this.forms, data);
    }
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


