<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 00:33:58
<<<<<<< HEAD
 * @LastEditTime: 2020-07-03 00:39:19
=======
 * @LastEditTime: 2020-07-03 21:55:28
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
 * @LastEditors: your name
 * @Description: 编写博客页面
 * @FilePath: \PersonalBlog_Web\src\views\editBlogManage\EditBlog.vue
--> 
<template>
  <div>
<<<<<<< HEAD
  
=======
  <el-form :model="form">
  <el-card style="border-radius: 0">
      <div slot="header" style="text-align: center;">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </div>
      <!--标题一下的正文
      <el-input v-model="" placeholder=""></el-input>-->
    </el-card>
  </el-form>
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
  </div>
</template>

<script>
export default {
<<<<<<< HEAD

}
</script>

<style>

=======
  data() {
    return {
      form:{
        title:""
      }
    }
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
</style>