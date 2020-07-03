<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 00:09:59
<<<<<<< HEAD
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
        <el-row :gutter="20" style="padding: 10px">
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 20px;background: #673AB7">
                <i class="el-icon-s-custom index-icon"></i>
                新增博客
=======
 * @LastEditTime: 2020-07-03 19:41:39
 * @LastEditors: your name
 * @Description: 后台管理主页（zq版）
 * @FilePath: \PersonalBlog_Web\src\views\dashboard\Index.vue
--> 
<template>
  <div>
    <el-card style="border-radius: 0">
      <div slot="header" style="text-align: center;">
        <h2>管理首页</h2>
        <br />
      </div>
      <div class="demo">
        <el-row :gutter="20" style="padding: 10px">
          <el-col :span="6">
            <div class="grid-content">
              <div style="padding: 20px;background: #673AB7">
                <div @click="$router.push({name:'EditBlogManage'})">
                  <i class="el-icon-s-custom index-icon"></i>
                  <h3 style="text-align:right">心之所想皆在这里</h3>
                </div>
                <p style="text-align:center">新增博客</p>
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
              </div>
            </div>
          </el-col>
          <el-col :span="6">
<<<<<<< HEAD
            <div class="grid-content ">
              <div style="padding: 20px;background: #3c8dbc">
                <i class="el-icon-picture index-icon"></i>
                总文章数
=======
            <div class="grid-content">
              <div style="padding: 20px;background: #3c8dbc">
                <div @click="$router.push({name:'BlogManage'})">
                  <i class="el-icon-picture index-icon"></i>
                  <h3 style="text-align:right">{{blogNum}}</h3>
                </div>
                <p style="text-align:center">总文章数</p>
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
              </div>
            </div>
          </el-col>
          <el-col :span="6">
<<<<<<< HEAD
            <div class="grid-content ">
              <div style="padding: 20px;background: #009688">
                <i class="el-icon-shopping-bag-1 index-icon"></i>
               收到的评论数
              </div>
            </div>
          </el-col>
		  </el-row>
		  <el-row :gutter="20" style="padding: 10px">
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 20px;background: #607D8B">
                <i class="el-icon-shopping-cart-2 index-icon"></i>
              分类数量
              </div>
            </div>
          </el-col>
        <!-- 这里调整行间距 -->
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 20px;background: #673AB7">
                <i class="el-icon-s-custom index-icon"></i>
                标签总量
=======
            <div class="grid-content">
              <div style="padding: 20px;background: #009688">
                <div @click="$router.push({name:'CommentManage'})">
                  <i class="el-icon-shopping-bag-1 index-icon"></i>
                  <h3 style="text-align:right">{{commentNum}}</h3>
                </div>
                <p style="text-align:center">收到的评论数</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding: 10px">
          <el-col :span="6">
            <div class="grid-content">
              <div style="padding: 20px;background: #607D8B">
                <div @click="$router.push({name:'CategoryManage'})">
                  <i class="el-icon-shopping-cart-2 index-icon"></i>
                  <h3 style="text-align:right">{{categoryNum}}</h3>
                </div>
                <p style="text-align:center">分类数量</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div style="padding: 20px;background: #673AB7">
                <div @click="$router.push({name:'TagManage'})">
                  <i class="el-icon-s-custom index-icon"></i>
                  <h3 style="text-align:right">{{tagNum}}</h3>
                </div>
                <p style="text-align:center">标签总量</p>
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
              </div>
            </div>
          </el-col>
          <el-col :span="6">
<<<<<<< HEAD
            <div class="grid-content ">
              <div style="padding: 20px;background: #3c8dbc">
                <i class="el-icon-picture index-icon"></i>
                友情链接
=======
            <div class="grid-content">
              <div style="padding: 20px;background: #3c8dbc">
                <div @click="$router.push({name:'TagRelationManage'})">
                  <i class="el-icon-picture index-icon"></i>
                  <h3 style="text-align:right">{{tagRelation}}</h3>
                </div>
                <p style="text-align:center">友情链接</p>
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
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
<<<<<<< HEAD

}
=======
  data() {
    return {
      blogNum: "",
      commentNum: "",
      categoryNum: "",
      tagNum: "",
      tagRelation: ""
    };
  },
  created() {
    // 随着页面一起加载数据
    // this.initData();
  },
  methods: {
    // initData(){
    //   blogNum()
    //   .then((result) => {
    //     console.log(result);
    //     this.blogNum = result;
    //   }).catch(() => {
    //   });
    //   commentNum() .then((result) => {
    //     this.commentNum = result;
    //   }).catch(() => {
    //   });
    //   categoryNum().then((result) => {
    //     this.categoryNum = result;
    //   }).catch(() => {
    //   });
    //   tagNum().then((result) => {
    //     console.log(result);
    //     this.tagNum = result;
    //   }).catch(() => {
    //   });
    //   tagRelation().then((r) =>{
    //     this.tagRelation = r;
    //   })
    // }
  }
};
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
</script>

<style lang="scss">
.demo {
  margin: 10px;
<<<<<<< HEAD
=======
  .el-row {
    display: flex;
    justify-content: center;
  }
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
  .grid-content {
    border-radius: 4px;
    overflow: hidden;
    color: #fff;
    background: #d3dce6;
    .index-icon {
      font-size: 82px;
      color: #fff;
<<<<<<< HEAD
=======
      top: -10px;
      z-index: 0;
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
    }
  }
}
</style>

