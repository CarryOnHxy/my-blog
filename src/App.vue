<template>
  <div id="app">
    <nav-bar/>
    <poster-com>
      <aside class="home_aside"></aside>
      <main id="main">
        <search-bar></search-bar>
        <router-view/>
      </main>
    </poster-com>
  </div>
</template>
<script>
import navBar from "@/components/common/nav-bar.vue";
import posterCom from "@/components/common/poster.vue";
import searchBar from "@/components/common/search-bar.vue";
export default {
  components: { navBar, posterCom, searchBar }
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/reset.css";
@import "~@/assets/less/tool.less";
#app {
  font-family: "Inconsolata", "Microsoft YaHei", FreeSans, Arimo, "Droid Sans",
    "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3",
    "FontAwesome", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* width: 87%; */
  height: 100%;
  padding-left: 170px;
}
#main {
  width: 55%;
  height: 100%;
  float: right;
}
.home_aside {
  .wh(20%, 100%);
  .miwh(20%, 100%);
  float: right;
  background: #ededed
}
@media screen and (max-width: 1280px) {
  #app {
    padding-left: 45px;
  }
}
</style>
