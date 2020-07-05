<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 08:05:45
 * @LastEditTime: 2020-07-05 09:01:10
 * @LastEditors: your name
 * @Description: 博客管理页面
 * @FilePath: \PersonalBlog_Web\src\views\modelManage\BlogManage.vue
--> 
<template>
  <div>
    <el-table
      :data="blogData"
      border
      style="width: 100%;height: 450px;text-align: center;"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
    >
      <el-table-column prop="blogTitle" label="标题"></el-table-column>
      <el-table-column prop label="预览图">
        <template slot-scope="s">
          <!--src="serverImageUrl+s.row.imgpath" -->
          <el-image style="width: 160px;" :src="s.row.url"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop label="状态">
        <template slot-scope="s">
          <div v-if="s.row.blogStatus == 1" style="color: green;">成功</div>
          <div v-if="s.row.blogStatus == 2" style="color: red;">待发布</div>
        </template>
      </el-table-column>
      <el-table-column prop="blogViews" label="浏览量"></el-table-column>
      <el-table-column prop="blogCategoryName" label="博客分类"></el-table-column>
      <el-table-column prop="createTime" label="添加时间"></el-table-column>
    </el-table>

    <el-pagination
      layout="prev, pager, next, total"
      @current-change="currentChange"
      :page-size="pagesize"
      :total="total"
    ></el-pagination>
  </div>
</template>
 
 <script>
// import { serverApiUrl } from "@/config/apiUrl";
import { bloglist } from "@/api/modelManage/blog";

// import sy1 from "@/assets/images/sy_img1.jpg";
export default {
  data() {
    return {
      pagesize: 5, //每页显示的数据
      currpage: 1, //默认为第一页
      total: 0, //总页数
      blogData: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
    currentChange(currentPage) {
      this.currpage = currentPage;
      this.initData();
    },
    initData() {
      bloglist({
        //左边的名字是在mapper.xml文件中使用的，右边的是源于vue对象data中の定义
        page: this.currpage, //page>0
        limit: this.pagesize
      })
        .then(result => {
          this.blogData = result.list;
           this.total = result.totalCount;
        })
        .catch(() => {});
    }
  }
};
</script>
