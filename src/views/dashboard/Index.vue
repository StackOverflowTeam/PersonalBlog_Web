<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 00:09:59
 * @LastEditTime: 2020-07-07 13:34:20
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
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div style="padding: 20px;background: #3c8dbc">
                <div @click="$router.push({name:'BlogManage'})">
                  <i class="el-icon-picture index-icon"></i>
                  <h3 style="text-align:right">{{blogNum}}</h3>
                </div>
                <p style="text-align:center">总文章数</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
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
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div style="padding: 20px;background: #3c8dbc">
                <div @click="$router.push({name:'LinkManage'})">
                  <i class="el-icon-picture index-icon"></i>
                  <h3 style="text-align:right">{{LinkManage}}</h3>
                </div>
                <p style="text-align:center">友情链接</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import { blogCount } from "@/api/modelManage/blog";
import { categoryList } from "@/api/modelManage/category";
import { commentList } from "@/api/modelManage/comment";
import { tagCount } from "@/api/modelManage/tag";
import { linkCount } from "@/api/modelManage/link";

export default {
  data() {
    return {
      blogNum: "",
      commentNum: "",
      categoryNum: "",
      tagNum: "",
      LinkManage: ""
    };
  },
  created() {
    // 随着页面一起加载数据
    blogCount()
      .then(result => {
        this.blogNum = result;
      })
      .catch(() => {});

    categoryList({
      page: 1, //page>0
      limit: 7
    })
      .then(result => {
        this.categoryNum = result.totalCount;
      })
      .catch(() => {});

    commentList({
      page: 1, //page>0
      limit: 7})
      .then(result => {
        this.commentNum = result.totalCount;
      })
      .catch(() => {});

    tagCount()
      .then(result => {
        this.tagNum = result;
      })
      .catch(() => {});

    linkCount()
      .then(result => {
        this.LinkManage = result;
      })
      .catch(() => {});
  },
  methods: {}
};
</script>

<style lang="scss">
.demo {
  margin: 10px;
  .el-row {
    display: flex;
    justify-content: center;
  }
  .grid-content {
    border-radius: 4px;
    overflow: hidden;
    color: #fff;
    background: #d3dce6;
    .index-icon {
      font-size: 82px;
      color: #fff;
      top: -10px;
      z-index: 0;
    }
  }
}
</style>

