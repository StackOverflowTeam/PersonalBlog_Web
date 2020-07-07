<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 08:05:45
 * @LastEditTime: 2020-07-05 10:28:59
 * @LastEditors: your name
 * @Description: 博客管理页面
 * @FilePath: \PersonalBlog_Web\src\views\modelManage\CommentManage.vue
--> 
<template>
  <div>
    <el-table
      :data="data"
      border
      style="width: 100%;height: 500px;"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
    >
      <el-table-column prop="commentBody" label="评论内容">
		    <el-button type="success" @click="open">查看</el-button>
      <!--  <el-button type="success" size="medium">查看</el-button> -->
      </el-table-column>
      <el-table-column prop="commentCreateTime" label="评论时间"></el-table-column>
      <el-table-column prop label="评论人">
        <template slot-scope="s">
        <!--数据库里没有图-->
        <!--  <el-image style="width: 100px;" :src="s.row.url"></el-image> -->
          <p>{{s.row.commentator}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="评论人邮箱"></el-table-column>
      <el-table-column prop label="状态">
        <template slot-scope="s">
          <div v-if="s.row.commentStatus == 1" style="color: green;">已审核</div>
          <div v-if="s.row.commentStatus == 2" style="color: orangered;">待审核</div>
        </template>
      </el-table-column>
      <el-table-column prop="replyBody" label="回复内容"></el-table-column>
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
import { commentList } from "@/api/modelManage/comment";
export default {
  data() {
    return {
      pagesize: 4, //每页显示的数据
      currpage: 1, //默认为第一页
      total: 0,
     data: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
	      open() {
	          this.$alert('不愧是大佬啊，佩服', '评论', {
	            confirmButtonText: '确定',
	            // callback: action => {
	            //   this.$message({
	            //     type: 'info',
	            //     //message: `action: ${ action }`
	            //   });
	            // }
	          });
	        },
    currentChange(currentPage) {
      this.currpage = currentPage;
      this.initData();
    },
    initData() {
      commentList({
        page: this.currpage, //page>0
        limit: this.pagesize
      })
        .then(result => {
          this.data = result.list;
         this.total = result.totalCount;
        })
        .catch(() => {});
    }
  }
};
</script>
