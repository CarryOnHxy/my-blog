<template>
  <div class="aa_con">
    <adminTable
      :tableData="articleList"
      :tableHead="articleField"
      :isLoading="isLoading"
      :currentPage="currentPage"
      :totalPage="totalPage"
      @editData="editArticle"
      @deleteData="deleteArticle"
      @addData="addData"
      @changeCurrentPage="changeCurrentPage"
    >文章管理</adminTable>
  </div>
</template>
<script>
import adminTable from "_c/common/admin-table.vue";
import { getArticleList, deleteArticle } from "@/api/article";
import { formatTime } from "@/lib/tool";
const PAGE_SIZE = 10;
export default {
  data() {
    return {
      articleList: null,
      articleField: [
        //文章表的字段名称和属性
        { props: "id", label: "ID" },
        { props: "title", label: "文章标题" },
        { props: "date", label: "发布时间" }
      ],
      isLoading: false,
      currentPage: 1,
      totalPage: 0
    };
  },
  watch:{
      currentPage(){
          this.getArticle()
      }
  },
  /* 获取文章数据 ,处理时间戳*/
  mounted() {
      this.getArticle(data=>{
          this.totalPage = data.totalPage;
      })
  },
  methods: {
    editArticle(scope) {
        this.$router.push({name:'article-editor',query:{articleId:scope.row.id,isEdit:1}})
    },
    deleteArticle(scope) {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示").then(() => {
        this.isLoading = true;
        deleteArticle({ id: scope.row.id })
          .then(res => {
            if (res.data.deleteRes) {
              setTimeout(() => {
                this.articleList.splice(scope.$index, 1);
                this.isLoading = false;
                this.$message({
                  type: "success",
                  message: "删除成功"
                });
              }, 500);
            }
          })
          .catch(() => {
            this.$message({
              type: "error",
              message: "删除失败"
            });
          });
      });
    },
    changeCurrentPage(currentPage) {
      this.currentPage = currentPage;
    },
    getArticle(callback) {
        this.isLoading = true;
      getArticleList({ pageNum: this.currentPage, pageSize: PAGE_SIZE }).then(res => {
          this.isLoading = false;
        this.articleList = res.data.articleList.map(ele => {
          let { year, month, day, hours, minutes } = formatTime(ele.timestamp);
          ele.date =
            year + "-" + month + "-" + day + "-" + hours + ":" + minutes;
          return ele;
        });
        callback&&callback(res.data)
      });
    },
    addData(){
        this.$router.push({name:'article-editor'})
    }
  },
  components: { adminTable }
};
</script>
