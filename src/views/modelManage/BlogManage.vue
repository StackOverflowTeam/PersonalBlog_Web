<!--
 * @Author: Zhang Qing
 * @Date: 2020-07-03 08:05:45
 * @LastEditTime: 2020-07-04 09:33:39
 * @LastEditors: your name
 * @Description: 博客管理页面
 * @FilePath: \PersonalBlog_Web\src\views\modelManage\BlogManage.vue
--> 
<template>
  <div >
 		<el-table :data="blogData.slice((currpage-1)*pagesize,currpage*pagesize)" border style="width: 100%;height: 450px;text-align: center;" :header-cell-style="{'text-align':'center'}"
          :cell-style="{'text-align':'center'}">
			  <el-table-column prop="title" label="标题"></el-table-column>
			  <el-table-column prop="" label="预览图">
					<template slot-scope="s">
					  <el-image style="width: 160px;" :src="s.row.url"></el-image>
					  </template>
					</el-table-column>
			  <el-table-column prop="statue" label="状态">
				 
			  </el-table-column>
			  <el-table-column prop="watchnum" label="浏览量">
				   
			  </el-table-column>
			  <el-table-column prop="sort" label="博客分类"></el-table-column>
			  <el-table-column prop="date" label="添加时间"></el-table-column>
 		</el-table>
 
 		  <el-pagination
 			layout="prev, pager, next"
 			@current-change="currentChange"
 			@size-change="handleSizeChange"
 		    :current-page="currpage"
 			:page-size="pagesize"
 		    :total="6">
 		  </el-pagination>
   </div>
 </template>
 
 <script>
  import sy1 from '@/assets/images/sy_img1.jpg'
  import sy2 from '@/assets/images/sy_img2.jpg'
  import sy3 from '@/assets/images/sy_img3.jpg'
  import sy4 from '@/assets/images/sy_img4.jpg'
  import sy5 from '@/assets/images/sy_img5.jpg'
  
 export default {
   data() {
     return {
 	  pagesize: 3,//每页显示的数据
 	  currpage: 1,//默认为第一页
 	  blogData: [
 		  {
 			title:'Spring教程系列',
 		  	url:sy1,
			statue:'成功',
			watchnum:100,
			sort:'随笔',
 		  	date:'2019-01-11',
 		  },
 		{
			title:'Spring教程系列',
			url:sy2,
			statue:'待发布',
			watchnum:0,
			sort:'随笔',
 			date:'2019-01-11',
 		},
		{
			title:'Spring教程系列',
			url:sy3,
			statue:'成功',
			watchnum:100,
			sort:'日记',
			date:'2019-01-11',
		},
		{
			title:'Spring教程系列',
			url:sy4,
			statue:'待发布',
			watchnum:0,
			sort:'随笔',
			date:'2019-01-11',
		},
		{
			title:'Spring教程系列',
			url:sy5,
			statue:'成功',
			watchnum:100,
			sort:'随笔',
			date:'2019-01-11',
		},
 	  ],
     };
   },
   methods: {
 	currentChange(currentPage){
 	  this.currpage = currentPage;
 	},
 	 handleSizeChange(size) {
 			this.pagesize = size;
 		},
   },
 };
 </script>
