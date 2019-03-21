<template>
  <div class="va_con">
    <adminTable
      :tableData="videoList"
      :tableHead="videoField"
      :isLoading="isLoading"
      :currentPage="currentPage"
      :totalPage="totalPage"
      @editData="editVideo"
      @deleteData="deleteVideo"
      @addData="addVideo"
      @changeCurrentPage="changeCurrentPage"
    >视频管理</adminTable>
  </div>
</template>
<script>
import adminTable from "_c/common/admin-table.vue";
import { getVideoList, deleteVideo } from "@/api/video";
import { formatTime } from "@/lib/tool";
const PAGE_SIZE = 10;

export default {
  data() {
    return {
      videoList: null,
      videoField: [
        //文章表的字段名称和属性
        { props: "id", label: "ID" },
        { props: "title", label: "视频标题" },
        { props: "date", label: "发布时间" }
      ],
      isLoading: false,
      currentPage: 1,
      totalPage: 0
    };
  },
  mounted() {
    this.getVideo(data => {
      this.totalPage = data.totalPage;
    });
  },
  watch: {
    currentPage() {
      this.getVideo();
    }
  },
  components: { adminTable },
  methods: {
    editVideo(scope) {
      this.$router.push({
        name: "video-editor",
        query: { videoId: scope.row.id, isEdit: 1 }
      });
    },
    deleteVideo(scope) {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示").then(() => {
        this.isLoading = true;
        deleteVideo({ id: scope.row.id })
          .then(res => {
            if (res.data.deleteRes) {
              setTimeout(() => {
                this.videoList.splice(scope.$index, 1);
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
    addVideo() {
      this.$router.push({ name: "video-editor" });
    },
    changeCurrentPage() {
      this.currentPage = currentPage;
    },
    getVideo(callback) {
      this.isLoading = true;
      getVideoList({ pageNum: this.currentPage, pageSize: PAGE_SIZE }).then(
        res => {
          this.isLoading = false;
          this.videoList = res.data.videoList.map(ele => {
            let { year, month, day, hours, minutes } = formatTime(
              ele.timestamp
            );
            ele.date =
              year + "-" + month + "-" + day + "-" + hours + ":" + minutes;
            return ele;
          });
          callback && callback(res.data);
        }
      );
    }
  }
};
</script>
