<!--
 * @Author: Zhang Qing
<<<<<<< HEAD
 * @Date: 2020-07-03 08:05:45
 * @LastEditTime: 2020-07-03 11:23:37
 * @LastEditors: your name
 * @Description: 博客管理页面
 * @FilePath: \PersonalBlog_Web\src\views\modelManage\BlogManage.vue
--> 
<template>
  <div class="nav">
 		<el-table :data="blogData.slice((currpage-1)*pagesize,currpage*pagesize)" border style="width: 100%;height: 500px;" :header-cell-style="{'text-align':'center'}"
          :cell-style="{'text-align':'center'}">
			  <el-table-column prop="title" label="评论内容" >
				  <el-button type="success" size="medium" >查看</el-button>
			  </el-table-column>
			  <el-table-column prop="date" label="评论时间">
			  </el-table-column>
			  <el-table-column prop="person" label="评论人">
					<template slot-scope="s">
					  <el-image style="width: 100px;" :src="s.row.url"></el-image>
					  <p>{{s.row.person}}</p>
					 </template>
			  </el-table-column>
			  <el-table-column prop="personpost" label="评论人邮箱">
			  					
			  </el-table-column>
			  <el-table-column prop="statue" label="状态">
				 
			  </el-table-column>
			  <el-table-column prop="content" label="回复内容">
			  </el-table-column>
 		</el-table>
 
 		  <el-pagination
 			layout="prev, pager, next"
 			@current-change="currentChange"
 			@size-change="handleSizeChange"
 		    :current-page="currpage"
 			:page-size="pagesize"
 		    :total="7">
 		  </el-pagination>
   </div>
 </template>
 
 <script>
  import person1 from '@/assets/person/lm_1.jpg'
  import person2 from '@/assets/person/lm_2.jpg'
  import person3 from '@/assets/person/lm_3.jpg'
  import person4 from '@/assets/person/lm_4.jpg'
  import person5 from '@/assets/person/lm_5.jpg'
  import person6 from '@/assets/person/lm_6.jpg'
  import person7 from '@/assets/person/lm_7.jpg'
 export default {
   data() {
     return {
 	  pagesize: 3,//每页显示的数据
 	  currpage: 1,//默认为第一页
 	  blogData: [
 		  {
			date:'2019-01-11 21:30',
 		  	url:person1,
			person:'小红',
			statue:'已审核',
			personpost:'1234567880@qq.com',
			content:'阿巴阿巴阿巴',
 		  	
 		  },
 		{
			date:'2019-01-11 21:30',
			url:person2,
			person:'小红',
			statue:'已审核',
			personpost:'1234567880@qq.com',
			content:'阿巴阿巴阿巴',
 			
 		},
		{
			date:'2019-01-11 21:30',
			url:person3,
			person:'小红',
			name:'abab',
			statue:'待审核',
			personpost:'1234567880@qq.com',
			content:'阿巴阿巴阿巴',
			
		},
		{
			date:'2019-01-11 21:30',
			url:person4,
			person:'小红',
			statue:'已审核',
			personpost:'1234567880@qq.com',
			content:'阿巴阿巴阿巴',
	
		},
		{
			date:'2019-01-11 21:30',
			url:person5,
			person:'小红',
			statue:'待审核',
			personpost:'1234567880@qq.com',
			content:'阿巴阿巴阿巴',
			
		},
		{
			date:'2019-01-11 21:30',
			url:person6,
			person:'小红',
			statue:'已审核',
			personpost:'1234567880@qq.com',
			content:'阿巴阿巴阿巴',
			
		},
		{
			date:'2019-01-11 21:30',
			url:person7,
			person:'小红',
			statue:'待审核',
			personpost:'1234567880@qq.com',
			content:'阿巴阿巴阿巴',
			
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
=======
 * @Date: 2020-07-03 08:06:24
 * @LastEditTime: 2020-07-03 11:23:30
 * @LastEditors: your name
 * @Description: 评论管理页面
 * @FilePath: \PersonalBlog_Web\src\views\modelManage\CommentManage.vue
--> 
<template>
  <div>
  这里需要写页面
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
>>>>>>> 9d47891053a73571fde5e3f1a1d707e5c7a0a012
