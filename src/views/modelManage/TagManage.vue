<template>
  <div>
    <ToolBar>
      <el-button type="success" size="small" @click="showEditDialog = true">添加</el-button>
    </ToolBar>
    <el-table
      :data="data"
      border
      style="width: 100%;height: 450px;"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
    >
      <!-- 	  <el-table-column type="selection" width="40px"  v-model="checked" @click="handleSelectionChange">
  		   <el-checkbox ></el-checkbox>
      </el-table-column>-->
      <el-table-column prop="tagName" label="标签名称"></el-table-column>
      <el-table-column prop="createTime" label="添加时间"></el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="s">
          <el-button type="danger" size="small" @click="removeItem(s.row)">删除</el-button>
          {{s.row.id}}
        </template>
        
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next, total"
      @current-change="currentChange"
      :current-page.sync="currpage"
      :page-size="pagesize"
      :total="total"
    ></el-pagination>

    <Edit :showEditDialog="showEditDialog" @close="showEditDialog = false" />
  </div>
</template>

<script>
import Edit from "./TagEdit.vue";
import { tagDelete } from "@/api/modelManage/tag";

import { tagList } from "@/api/modelManage/tag";
export default {
  data() {
    return {
      pagesize: 7, //每页显示的数据
      currpage: 1, //默认为第一页
      total: 0,
      currentSelectItem: [],
      // checked:false,
      showEditDialog: false,
      data: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
    removeItem(row) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(row);
          tagDelete({id:row.tagId}).then((r) => {
             this.$message({
            type: "success",
            message: r.msg //对应后台的status
          });
          this.refresh();
          }).catch(() => {
          });
        })
        .catch(() => {});
    },
    currentChange(currentPage) {
      this.currpage = currentPage;
      this.initData();
    },
    // handleSizeChange(size) {
    //   this.pagesize = size;
    // },
    handleSelectionChange(row) {
      this.blogData.forEach(item => {
        if (item.status != row.status) {
          item.status = this.checked;
        }
      });
      this.currentSelectItem = row;
    },
    initData() {
      tagList({
        page: this.currpage, //page>0
        limit: this.pagesize
      })
        .then(result => {
          this.data = result.list;
          this.total = result.totalCount;
          // console.log(this.total);
        })
        .catch(() => {});
    }
  },
  components: { Edit }
};
</script>

