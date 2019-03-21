<template>
  <div class="at_con">
        <div class="at_title"><slot></slot></div>
          <el-button size="medium" @click="add(scope)" type="primary" class="at_add_btn">新增</el-button>
    <el-table
      :data="tableData"
      border
      class="at_table"
      v-loading="isLoading"
      element-loading-text="拼命加载中"
    >
      <el-table-column
        v-for="(item,index) of tableHead"
        :key="'col_'+index"
        :prop="item.props"
        :label="item.label"
      />
      <el-table-column label="操作" v-if="tableData">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="del(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination_con">
      <el-pagination 
      background 
      layout="prev,pager,next" 
      :page-count="totalPage"
      @current-change="changePage"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tableData", "tableHead", "isLoading", "totalPage", "currentPage"],
  methods: {
    edit(scope) {
      this.$emit("editData", scope);
    },
    del(scope) {
      this.$emit("deleteData", scope);
    },
    add(scope){
        this.$emit('addData',scope);
    },
    changePage(currentPage){
        this.$emit('changeCurrentPage',currentPage)
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/less/tool.less";
.at_con{
   position: relative;
}
.at_title{
    .tr_cet(x);
    top:10px;
    font-size: 20px;
}
.at_table {
  padding: 10px 5px;
  .clearfix()
}
.at_add_btn{
    float: right;
     margin: 10px;
}
.pagination_con{
    margin-top: 20px;
    .fl_cet();
}
</style>

