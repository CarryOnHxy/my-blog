<template>
  <!-- ac = article-cate -->
  <div class="ac_con">
    <div class="ac_title">分类目录</div>
    <div class="ac_list">
      <router-link to="/article" class="ac_item" v-for="(item,index) of cateList" :key="index">{{item.name}}</router-link>
    </div>
  </div>
</template>
<script>
import { cateList } from "../../public/js/mock-data.js";
export default {
  created() {
    this.cateList = cateList;
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
  .wh(80%, auto);
  margin: 0px auto;
//   background: mistyrose;
  .fl();
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-x: hidden;
}
.ac_title {
  .wh(80%, 80px);
  margin: 0 auto;
  line-height: 80px;
  font-size: 30px;
  color: #16a085;
  font-weight: bold;
}
.ac_item {
  .wh(40%, 150px);
  margin-bottom: 30px;
  .txt_cet(150px);
  border: 1px solid #16a085;
  color:#2eabfd;
  font-size: 15px;
  transition: background-color 1s,font-size 0.5s,color 0.5s
}
.ac_item:hover{
    background: #16a085;
    font-size: 20px;
    color: #fff;
}
</style>
