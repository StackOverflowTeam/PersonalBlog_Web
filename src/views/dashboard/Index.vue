<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 00:09:59
 * @LastEditTime: 2020-07-03 00:26:38
 * @LastEditors: your name
 * @Description: 后台管理主页（zq版）
 * @FilePath: \PersonalBlog_Web\src\views\dashboard\index.vue
--> 
<template>
   <div>
    <el-card style="border-radius: 0">
      <div slot="header" style="text-align: center;">
        <h2>管理首页</h2>
      <br>
		 <!--  <el-image style="width:80%;margin: 0,auto;" :src="url"></el-image> -->
	  </div>
      <div class="demo">
      <!-- 这里可能需要调整排版 背景颜色 图标的更换  一共有6个块  待完善-->
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #673AB7">
                <i class="el-icon-s-custom index-icon"></i>
                新增博客
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #3c8dbc">
                <i class="el-icon-picture index-icon"></i>
                总文章数
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #009688">
                <i class="el-icon-shopping-bag-1 index-icon"></i>
               收到的评论数
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #607D8B">
                <i class="el-icon-shopping-cart-2 index-icon"></i>
              分类数量
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 这里调整行间距 -->
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #673AB7">
                <i class="el-icon-s-custom index-icon"></i>
                新增博客
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #3c8dbc">
                <i class="el-icon-picture index-icon"></i>
                总文章数
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #009688">
                <i class="el-icon-shopping-bag-1 index-icon"></i>
               收到的评论数
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #607D8B">
                <i class="el-icon-shopping-cart-2 index-icon"></i>
              分类数量
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.demo {
  margin: 10px;
  .grid-content {
    border-radius: 4px;
    overflow: hidden;
    color: #fff;
    background: #d3dce6;
    .index-icon {
      font-size: 82px;
      color: #fff;
    }
  }
}
</style>

