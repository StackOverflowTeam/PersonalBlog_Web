<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <h3 class="title">{{title}}</h3>
      <el-form-item prop="login_user_name">
        <el-input
          v-model="loginForm.login_user_name"
          type="text"
          autocomplete="off"
          placeholder="账号"
        >
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <el-form-item prop="login_password">
        <el-input
          v-model="loginForm.login_password"
          type="password"
          autocomplete="off"
          placeholder="密码"
        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <el-form-item prop="login_verifyCode">
        <el-input
          v-model="loginForm.login_verifyCode"
          placeholder="请填写验证码"
          @keyup.enter.native="handleLogin"
        ></el-input>
      </el-form-item>

      <img :src="checkCode"/>
      <el-checkbox v-model="rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click="login('loginForm')"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!-- 底部 -->
    <!-- 	<div id="el-login-footer">
		<span v-html="$StackOverflow组"/>
		      <span> ⋅ </span>
		      <a href="#" target="_blank">关于我们</a>
    </div>-->
  </div>
</template>

<script>
import { setToken } from "@/utils/common";
import { login } from "@/api/user/user";
// import {  captcha } from "@/api/user/user";
import { serverApiUrl } from "@/config/apiUrl";
export default {
  data() {
    return {
      title: "个人博客登陆",
      loginForm: {
        login_user_name: "",
        login_password: "",
        login_verifyCode: ""
      },
      checkCode:serverApiUrl+"/admin/captcha",
      rememberMe: false,
      loading: false,
      loginRules: {
        login_user_name: [
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        login_password: [
          { required: true, trigger: "blur", message: "密码不能为空" }
        ]
      }
    };
  },
  created() {
    // this.createCode();
  },
  methods: {
    login(loginForm) {
      //登陆验证
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          login({
            userName: this.loginForm.login_user_name,
            password: this.loginForm.login_password,
						verifyCode:this.loginForm.login_verifyCode
          })
            .then(r => {
              console.log(r);
              this.loading = true;
              setToken("HJDF844GDFG5D8J7FGHFG5");
              this.$router.push("/personhome");
            })
            .catch(() => {});
        } else {
          this.loading = false;
          this.$message("用户名或密码错误！！");
          return false;
        }
      });
    },
    // login()  {
    // this.$refs.loginForm.validate(valid => {
    //  if (valid) {
    // 	    this.loading=true;
    // 		if(this.loginForm.username=='admin'&&this.loginForm.password=='123'){
    // 		  setToken("HJDF844GDFG5D8J7FGHFG5");
    // 		  this.$router.push("/personhome");
    // 		 }else{
    // 			this.loading=false;
    // 			this.$message('用户名或密码错误！！');
    //    }
    //  }
    //   })
    // }
  },
  mounted: function() {}
};
</script>
<style rel="stylesheet/scss" lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-image: url(../../assets/images/login-background.jpg);
  background-size: cover;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
}
.el-input {
  height: 38px;
}

.input-icon {
  height: 39px;
  width: 14px;
  margin-left: 2px;
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>