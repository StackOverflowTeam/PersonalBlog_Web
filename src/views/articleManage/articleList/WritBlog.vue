<template>
	<div >
		<span style="padding: 0;margin: 0;font-size: 10px;">记录我的点点滴滴...
		</span>
		<div style="padding-bottom: 80px;margin-left: 200px;">
			  <el-button type="success" size="medium"  @click="chage()" style="float: right;">查看我的博客</el-button>
		</div>
		<p style="text-align: center;margin-bottom: 20px;font-size: 20px;">编写我的博客</p>
    <el-form
      :model="forms"
      :rules="rules"
      ref="editForms"
      class="edit-forms"
      label-position="right"
      :label-width="labelWidth"
	  style="margin-left: 30%;"
    >
     <el-form-item label="请输入标题" prop="name">
        <el-input style="width: 300px"
          v-model="forms.name"
          placeholder="请输入标题(必填)"
        ></el-input>
      </el-form-item>
	  <el-form-item label="博客类型" prop="typeid">
	  		 <el-select v-model="value" placeholder="请选择">
	  		    <el-option
	  		      v-for="item in options"
	  		      :key="item.value"
	  		      :label="item.label"
	  		      :value="item.value">
	  		    </el-option>
	  		  </el-select>
	  </el-form-item>
	  <el-form-item label="图片" prop="imgpath">
	  		 <el-upload
	  		   class="upload-demo"
	  		   action="https://jsonplaceholder.typicode.com/posts/"
	  		   :on-preview="handlePreview"
	  		   :on-remove="handleRemove"
	  		   :file-list="fileList2"
	  		   list-type="picture">
	  		   <el-button size="small" type="primary">点击上传</el-button>
	  		 </el-upload>
	  </el-form-item>
      <el-form-item label="内容" prop="desc">
        <el-input style="width: 350px;" v-model="forms.desc" type="textarea" placeholder="请输入您的内容(必填)"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')" style="margin-right: 68px;margin-left:44%;">取 消</el-button>
      <el-button type="primary" @click="submit">确认</el-button>
    </div>
  </div>
</template>

<script>
import {
  Required,
  Url,
  Float2,
  RequiredAndPhone,
  FillerFieldRules
} from "@/utils/validateRules";

import { fillerLeft } from "@/utils/common";
//, resetObject
export default {
  props: {
    title: {
      type: String,
      default: "编辑"
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
		options: [{
		          value: '选项1',
		          label: '日常随笔'
		        }, {
		          value: '选项2',
		          label: '心情'
		        },
				{
				  value: '选项3',
				  label: '其他'
				}],
				value: '',
      forms: {
        name: "",
        desc: "",
        test: "",
		typeid: "",
        imgpath:"",
      },
      rules: {
        ...FillerFieldRules(["name", "desc"], Required),
        phone: RequiredAndPhone, //or [Required, Phone]
        url: [Required, Url],
        test: Float2,
      }
    };
  },
  methods: {
    submit() {
      this.$refs.editForms.validate(valid => {
        if (valid) {
          this.$message({
            message: "字段验证通过，提交请求，成功后刷新分页！",
            type: "success"
          });
          this.$emit("success"); //通知列表分页刷新
          // add(this.forms)
          //   .then(r => {
          //     this.$message({
          //       message: "创建机构成功！",
          //       type: "success"
          //     });
          //     this.$emit("success");
          //   })
          //   .catch(() => {});
        } else {
          this.$message({
            message: "请按照提示正确填写内容！",
            type: "warning"
          });
          return false;
        }
      });
    },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePreview(file) {
	        console.log(file);
	      },
		  chage() {
		    this.$route.name("/list");
		  },
    FillerFormField(id, data) {
      //可以外部填充回写做编辑用，也可以请求详情接口填充表单
      this.$set(this.forms, "id", id);
      fillerLeft(this.forms, data);
    }
  }
};
</script>
