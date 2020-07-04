<template>
  <div>
    <ToolBar>
      
        <el-button type="success" size="small" @click="showEditDialog = true">添加</el-button>
      
 
    </ToolBar>
  <el-table :data="blogData.slice((currpage-1)*pagesize,currpage*pagesize)" border style="width: 100%;height: 450px;" :header-cell-style="{'text-align':'center'}"
    :cell-style="{'text-align':'center'}">
 <!-- 	  <el-table-column type="selection" width="40px"  v-model="checked" @click="handleSelectionChange">
  		   <el-checkbox ></el-checkbox>
  	  </el-table-column> -->
  	  <el-table-column prop="title" label="网站名称" >
  	  </el-table-column>
  	  <el-table-column prop="link" label="网站链接">
		  <template slot-scope="s">
			  <a href="#">{{s.row.link}}</a>
		  </template>
	  </el-table-column>
	  <el-table-column prop="des" label="描述"></el-table-column>
	  <el-table-column prop="index" label="排序值"></el-table-column>
	  <el-table-column prop="date" label="添加时间"></el-table-column>
	  <el-table-column prop="" label="操作">
			  <template slot-scope="s">
				  <el-button type="warning" size="small" @click="editItem(s.row.id)"
					>修改</el-button>
				  <el-button type="danger" size="small" @click="removeItem(s.row)"
					>删除</el-button>
			  </template>	
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
		 <Edit :showEditDialog="showEditDialog" @close="showEditDialog = false" />
		  
   </div>
</template>

<script>
	import Edit from "./TagRelationEdit.vue";
	
export default {
   data() {
     return {
 	  pagesize: 6,//每页显示的数据
 	  currpage: 1,//默认为第一页
	  currentSelectItem:[],
	  // checked:false,
	  showEditDialog: false,
 	  blogData: [
 		  {
			title:'<<Springboot>>',
			link:'1234567EREF',
			des:'阿巴阿巴吧',
			index:20,
			date:'2019-01-11 21:30',
 		  },
		  {
			title:'<<Springboot>>',
			link:'1234567EREF',
			des:'阿巴阿巴吧',
			index:20,
			date:'2019-01-11 21:30',
		  },
		  {
			title:'<<Springboot>>',
			link:'1234567EREF',
			des:'阿巴阿巴吧',
			index:20,
			date:'2019-01-11 21:30',
		  },
		  {
			title:'<<Springboot>>',
			link:'1234567EREF',
			des:'阿巴阿巴吧',
			index:20,
			date:'2019-01-11 21:30',
		  },
		  {
			title:'<<Springboot>>',
			link:'1234567EREF',
			des:'阿巴阿巴吧',
			index:20,
			date:'2019-01-11 21:30',
		  },
		  {
			title:'<<Springboot>>',
			link:'1234567EREF',
			des:'阿巴阿巴吧',
			index:20,
			date:'2019-01-11 21:30',
		  },
 		
 	  ],
     };
   },
   methods: {
	   removeItem(row) {
	     this.$confirm("确定删除?", "提示", {
	       confirmButtonText: "确定",
	       cancelButtonText: "取消",
	       type: "warning"
	     })
	       .then(() => {
	         row.d = 0;
	         // updateStatus({ id: row.id})
	         //   .then(r => {
	         //     this.$message({
	         //       type: "success",
	         //       message: "操作成功!"
	         //     });
	         //     this.refresh();
	         //   })
	         //   .catch(() => {});
	       })
	       .catch(() => {});
	   },
 	currentChange(currentPage){
 	  this.currpage = currentPage;
 	},
 	 handleSizeChange(size) {
 			this.pagesize = size;
 		},
		 handleSelectionChange (row) {
			this.blogData.forEach(item => {
			  if (item.status != row.status) {
				item.status = this.checked;
			  }
			})
			this.currentSelectItem = row;
		},
		editItem(id) {
			this.id = id;
		    this.showEditDialog = true; 
		},
   },
   components: { Edit }
 };
 </script>

