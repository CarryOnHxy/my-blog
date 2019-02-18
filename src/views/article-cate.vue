<template>
  <!-- ac = article-cate -->
  <div class="ac_con">
    <div class="ac_title">分类目录</div>
    <div class="ac_list">
      <div
        :class="{ac_item_wrapper:true,ac_item_wrapper_last:index===cateList.length-1&&cateList.length%2!=0}"
        v-for="(item,index) of cateList"
        :key="index"
      >
        <router-link to="/article-detail" :class="{ac_item:true,ac_item_last:index===cateList.length-1&&cateList.length%2!=0}">{{item.name}}</router-link>
      </div>
      <!-- <router-link to="/article-detail" class="ac_item"  v-for="(item,index) of cateList" :key="index">{{item.name}}</router-link> -->
    </div>
  </div>
</template>
<script>
// import { cateList } from "../../public/js/mock-data.js";
import { getCategroryList } from "@/api/categrory";
export default {
  data() {
    return {
      cateList: []
    };
  },
  mounted() {
    getCategroryList().then(res => {
      this.cateList = res.data.rows;
    });
  }
};
</script>
<style lang="less">
@import "~@/assets/less/tool.less";
.ac_con {
  .wh(100%, auto);
  min-height: 100%;
  padding-bottom: 50px;
  overflow: auto;
}
.ac_list {
  .wh(70%, auto);
  margin: 0px auto;
  .fl();
  justify-content: space-between;
  flex-wrap: wrap;
  // overflow-x: hidden;
}
.ac_title {
  .wh(80%, 80px);
  margin: 0 auto;
  line-height: 80px;
  font-size: 30px;
  color: #16a085;
  font-weight: bold;
}
.ac_item_wrapper {
  .wh(40%, 150px);
  margin-bottom: 30px;
}
.ac_item_wrapper_last {
  .wh(100%, 100%);
}
.ac_item {
  .wh(100%, 100%);
  display: block;
  .txt_cet(150px);
  border: 1px solid #16a085;
  font-size: 15px;
  transition: background-color 1s, font-size 0.5s, color 0.5s;
}
.ac_item_last {
  .wh(40%, 150px);
}
.ac_item:hover {
  background: #16a085;
  font-size: 20px;
  color: #fff;
}
</style>
