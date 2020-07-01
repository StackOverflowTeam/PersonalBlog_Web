<template>
  <div>
    <ToolBar>
      <div style="margin-left: 200px;">
        <el-input
          placeholder="请输入文章标题"
          size="small"
          style="width: 140px"
          v-model="searchParams.title"
          clearable
        ></el-input>
        <el-select
          v-model="searchParams.type"
          clearable
          style="width: 140px"
          placeholder="请选择类型"
          size="small"
        >
          <el-option label="日常随笔" value="1"></el-option>
          <el-option label="心情" value="2"></el-option>
		  <el-option label="其他" value="3"></el-option>
        </el-select>
        <el-button type="success" size="small" @click="refresh()"
          >查询</el-button
        >
      </div>
    </ToolBar>
	
    <el-table :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)" border style="width: 100%">
      <el-table-column prop="title" label="文章标题"> </el-table-column>
      <el-table-column prop="" label="作者">
        <template slot-scope="s">
         {{ s.row.author.loginname }}
        </template>
      </el-table-column>
      <el-table-column prop="visit_count" label="浏览量"></el-table-column>
      <el-table-column prop="reply_count" label="回复"></el-table-column>
      <el-table-column fixed="right" label="操作" width="240">
        <div slot-scope="s">
          <el-button type="primary" size="small" @click="routeDemo(s.row)"
            >查看</el-button
          >
          <el-button type="danger" size="small" @click="removeItem(s.row)"
            >删除</el-button
          >
        </div>
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
<!--    <Edit :showEditDialog="showEditDialog" @close="showEditDialog = false" />
 -->  </div>
</template>

<script>
import { topics } from "@/api/articleManage/list";
//import Edit from "./Edit.vue";
export default {
  data() {
    return {
		pagesize: 5,//每页显示的数据
		currpage: 1,//默认为第一页
      searchParams: {
        title: "",
        type: ""
      },
      //showEditDialog: false,
      tableData: []
    };
  },
  created() {
    topics()
      .then(r => {
        this.tableData = r;
      })
      .catch(() => {});
  },
  methods: {
    routeDemo() {
      this.$message.info("待添加");
    },
    refresh() {
      //this.$refs.pagination.Refresh(); //分页刷新
    },
    returnData(pageList) {
      this.tableData = pageList.list;
    },

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
		}
  },
  //components: { Edit }
};
</script>
