<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 08:20:10
 * @LastEditTime: 2020-07-03 08:48:57
 * @LastEditors: your name
 * @Description: 修改密码页面
 * @FilePath: \PersonalBlog_Web\src\views\systemManage\ModifyPassword.vue
--> 
<template>
  <el-form :model="form" ref="form">
    <el-form-item label="暂留"></el-form-item>
    <el-form-item label="昵称">
      <el-input v-model="form.nikeName" placeholder></el-input>
    </el-form-item>
    <el-form-item label="原密码">
      <el-input v-model="form.oldPassword" placeholder="请输入原密码" show-password></el-input>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input v-model="form.newPassword" placeholder="请输入新密码" show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="form.newPassword2" placeholder="确认新密码"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nikeName: "",
        oldPassword: "",
        newPassword: "",
        newPassword2: ""
      }
    };
  },
  methods: {}
};
</script>

<style>
</style>