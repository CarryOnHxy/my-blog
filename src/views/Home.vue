<template>
  <div class="home_con">
    <nav-bar/>
    <poster-com>
      <aside class="home_aside"></aside>
      <main id="main">
        <search-bar></search-bar>
        <transition name="router-view">
          <router-view/>
        </transition>
        <router-link to="/login" class="login_con">
          <img src="@/assets/images/icon/login.png" alt="登录">
          登录
        </router-link>
      </main>
    </poster-com>
  </div>
</template>

<script>
// @ is an alias to /src
// import searchBar from "@/components/common/search-bar.vue"
import { mockData } from "../../public/js/mock-data.js";
// import articleItem from "@/components/article/article-item.vue";
import navBar from "@/components/common/nav-bar.vue";
import posterCom from "@/components/common/poster.vue";
import searchBar from "@/components/common/search-bar.vue";
export default {
  name: "home",
  data() {
    return {
      mockData
    };
  },
  components: { navBar, posterCom, searchBar }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.home_con {
  .wh(100%, 100%);
  .clearfix();
}

.home_detail {
  .wh(90%, 100%);
  .miwh(80%, 100%);
  margin: 0 auto;
}
.home_aside {
  .wh(20%, 100%);
  .miwh(20%, 100%);
  float: right;
  background: salmon;
}
#main {
  width: 55%;
  height: 100%;
  float: right;
  overflow: auto;
}
#main::-webkit-scrollbar {
  background: #ccc;
  width: 10px;
}
#main::-webkit-scrollbar-thumb {
  background: rgba(22, 160, 132, 0.651);
}
.home_aside {
  .wh(20%, 100%);
  .miwh(20%, 100%);
  float: right;
  background: #ededed;
}
.login_con {
  .ab(t, 20px);
  right: 20px;
  font-size: 16px;
  color: #bdbdbd;
}
.login_con > img {
  .wh(20px, 20px);
  margin-right: 5px;
}
.router-view-enter-active{
  transition: all .5s ease
}
.router-view-enter{
  transform: translateX(500px)
}
.router-view-enter-to{
transform: translateX(0px)
}
</style>

