
<template>
  <div>
  <el-form :model="form">
  <el-card style="border-radius: 0">
      <div slot="header" style="text-align: center;">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </div>
      <!--标题一下的正文
      <el-input v-model="" placeholder=""></el-input>-->
    </el-card>
  </el-form>
  </div>
</template>

<script>
export default {
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
</style>