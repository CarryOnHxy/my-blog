<template>
  <div id="app" :class="{no_padding:isLogin}">
    <!-- <nav-bar/>
    <poster-com>
      <aside class="home_aside"></aside>
      <main id="main">
        <search-bar></search-bar>
        <router-view/>
        <router-link to="/login" class="login_con">
          <img src="@/assets/images/icon/login.png" alt="登录">
          登录
        </router-link>
      </main>
    </poster-com> -->
    <router-view />
  </div>
</template>
<script>

export default {
  created(){
  },
  computed:{
    isLogin(){
      return this.$route.fullPath==="/login"
    }
  }
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
.no_padding{
  padding: 0 !important;
}

@media screen and (max-width: 1280px) {
  #app {
    padding-left: 45px;
  }
}
</style>
