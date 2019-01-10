<template>
  <div class="home_con">
    <div class="home_detail">
      <!-- <search-bar></search-bar> -->
      <articleItem :articles="mockData"/>
    </div>
    <!-- <aside class="home_aside"></aside> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import searchBar from "@/components/common/search-bar.vue"
import {mockData} from "../../public/js/mock-data.js"
import articleItem from "@/components/article/article-item.vue"
export default {
  name: "home",
  data(){
    return{
      mockData
    }
  },
  components: {

    articleItem
  }
};
</script>
<style lang="less">
@import "~@/assets/less/tool.less";
.home_con {
  .wh(100%, 100%);
  overflow:auto;
  .clearfix()
}
.home_con::-webkit-scrollbar{
    background: #ccc;
    width: 10px;
}
.home_con::-webkit-scrollbar-thumb{
  background:rgba(22, 160, 132, 0.651);
}
.home_con::-webkit-scrollbar-track{
  
}
.home_detail{
    .wh(90%, 100%);
  .miwh(80%,100%);
  margin: 0 auto;
  // float: left;
}
.home_aside{
  .wh(20%, 100%);
  .miwh(20%,100%);
  float: right;
  background:salmon
}
</style>

