<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 00:33:58
<<<<<<< HEAD
 * @LastEditTime: 2020-07-04 09:29:10
=======
 * @LastEditTime: 2020-07-03 21:55:28
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
 * @LastEditors: your name
 * @Description: 编写博客页面
 * @FilePath: \PersonalBlog_Web\src\views\editBlogManage\EditBlog.vue
--> 
<template>
  <div >
	  <el-form :model="forms" label-width="70px">
	    <el-form-item label="标题">
	      <el-input v-model="forms.title" style="width: 600px" placeholder="请输入您的标题"></el-input>
	    </el-form-item>
	    <el-form-item label="博客类型">
	     <el-select v-model="value" placeholder="请选择" style="width: 600px">
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
	    	  <textarea
	    	    placeholder="请输入您的内容"
	    		v-model="forms.desc"
	    	    style="width:600px;height: 180px;border: 1 solid;" >
	    	  </textarea>
	    </el-form-item>
	 
	  </el-form>
	<div slot="footer" class="dialog-footer">
      <el-button @click="chage" size="medium" style="margin-right: 68px;margin-left: 70px;">返回</el-button>
      <el-button type="primary" size="medium" @click="submit">确认</el-button>
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
      title: "",
      desc: "",
      test: "",
      typeid: "",
      imgpath:"",
    },
    rules: {
      ...FillerFieldRules(["title", "desc"], Required),
      phone: RequiredAndPhone, //or [Required, Phone]
      url: [Required, Url],
      test: Float2,
    }
    }
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
  		 chage(){
  			 this.$router.replace("/home");
  		 },
    FillerFormField(id, data) {
      //可以外部填充回写做编辑用，也可以请求详情接口填充表单
      this.$set(this.forms, "id", id);
      fillerLeft(this.forms, data);
    }
  }
};
</script>

<style>

</style>