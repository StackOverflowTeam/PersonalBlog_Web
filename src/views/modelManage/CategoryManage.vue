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
      <!-- <el-table-column type="selection" width="40px" v-model="checked" @click="handleSelectionChange">
  		   <el-checkbox ></el-checkbox>
      </el-table-column>-->
      <el-table-column prop="categoryName" label="分类名称"></el-table-column>
      <el-table-column prop label="分类图标">
        <template slot-scope="s">
          <!--src="serverImageUrl+s.row.imgpath" -->
          <el-image style="width: 100px;" :src="s.row.url"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="添加时间"></el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="s">
          <el-button type="warning" size="small" @click="editItem(s.row.id)">修改</el-button>
          <el-button type="danger" size="small" @click="removeItem(s.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next, total"
      @current-change="currentChange"
      :page-size="pagesize"
      :total="total"
    ></el-pagination>

    <Edit :showEditDialog="showEditDialog" @close="showEditDialog = false" />
  </div>
</template>

<script>
import { categoryList } from "@/api/modelManage/category";
import Edit from "./CategoryEdit.vue";
export default {
  data() {
    return {
      pagesize: 3, //每页显示的数据
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
    initData() {
      categoryList({
        page: this.currpage, //page>0
        limit: this.pagesize
      })
        .then(result => {
          this.data = result.list;
           this.total = result.totalCount;
        })
        .catch(() => {});
    },
    removeItem(row) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          row.d = 0;
        })
        .catch(() => {});
    },
    currentChange(currentPage) {
      this.currpage = currentPage;
      this.initData();
    },
    handleSelectionChange(row) {
      this.blogData.forEach(item => {
        if (item.status != row.status) {
          item.status = this.checked;
        }
      });
      this.currentSelectItem = row;
    },

    editItem(id) {
      this.id = id;
      this.showEditDialog = true;
    }
  },
  components: { Edit }
};
</script>

