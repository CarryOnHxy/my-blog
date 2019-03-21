<template>
  <div class="md_con">
    <adminTable
      :tableData="musicList"
      :tableHead="musicField"
      :isLoading="isLoading"
      :currentPage="currentPage"
      :totalPage="totalPage"
      @editData="editMusic"
      @deleteData="deleteMusic"
      @addData="addMusic"
      @changeCurrentPage="changeCurrentPage"
    >音乐管理</adminTable>
  </div>
</template>
<script>
import adminTable from "_c/common/admin-table.vue";
import { getMusicList, deleteMusic } from "@/api/music";
import { formatTime } from "@/lib/tool";
const PAGE_SIZE = 10;

export default {
  data() {
    return {
      musicList: null,
      musicField: [
        //文章表的字段名称和属性
        { props: "id", label: "ID" },
        { props: "name", label: "歌曲名" },
        { props: "singer", label: "歌手" }
      ],
      isLoading: false,
      currentPage: 1,
      totalPage: 0
    };
  },
  mounted() {
    this.getMusic(data => {
      this.totalPage = data.totalPage;
    });
  },
  watch: {
    currentPage() {
      this.getMusic();
    }
  },
  components: { adminTable },
  methods: {
    editMusic(scope) {
      this.$router.push({
        name: "music-editor",
        query: { musicId: scope.row.id, isEdit: 1 }
      });
    },
    deleteMusic(scope) {
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示").then(() => {
        this.isLoading = true;
        deleteMusic({ id: scope.row.id })
          .then(res => {
            if (res.data.deleteRes) {
              setTimeout(() => {
                this.musicList.splice(scope.$index, 1);
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
    addMusic() {
      this.$router.push({ name: "music-editor" });
    },
    changeCurrentPage() {
      this.currentPage = currentPage;
    },
    getMusic(callback) {
      this.isLoading = true;
      getMusicList({ pageNum: this.currentPage, pageSize: PAGE_SIZE }).then(
        res => {
          this.isLoading = false;
          this.musicList = res.data.musicList.map(ele => {
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

