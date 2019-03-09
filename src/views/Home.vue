<template>
  <div class="home_con">
    <nav-bar :loginState = "loginState"/>
    <poster-com><!-- A块 -->
      <aside class="home_aside" ref="aside" id="aside">
          <canvas id="canvas" ref="canvas"></canvas>
          <music-player />
        </aside><!-- C块 -->
      <main id="main">
        <search-bar></search-bar>
        <transition name="router-view">
          <router-view/><!-- B块路由视图 -->
        </transition>
        <div class="login_con" @click="toLogin">
          <img :src="loginImgUrl">
          {{loginText}}
        </div>
      </main>
    </poster-com>
  </div>
</template>

<script>
// @ is an alias to /src
import { mockData } from "../../public/js/mock-data.js";
import navBar from "@/components/common/nav-bar.vue";
import posterCom from "@/components/common/poster.vue";
import searchBar from "@/components/common/search-bar.vue";
import musicPlayer from "@/components/home/music-player.vue";
import {createCrossLine} from "@/lib/cross-line";
export default {
  name: "home",
  props: ["loginState"],
  data() {
    return {
      mockData,
      loginStateBackup:this.loginState
    };
  },
  computed: {
    loginImgUrl() {
      return this.loginStateBackup
        ? require("@/assets/images/icon/logout.png")
        : require("@/assets/images/icon/login.png");
    },
    loginText(){return this.loginStateBackup ? "退出" : "登陆"}
  },
  methods: {
    toLogin() {
      if (this.loginStateBackup) {
        document.cookie = `loginState =${false}`;
        this.loginStateBackup = false;
           this.$router.push({ path: "/" });
      } else {
        this.$router.push({ path: "/login" });
      }
    }
  },
  mounted(){
    this.$nextTick(()=>{
      let canvas = document.querySelector('#canvas'),
          aside = document.querySelector('#aside');
      createCrossLine(canvas,aside.clientWidth,aside.clientHeight);
    })
  },
  components: { navBar, posterCom, searchBar,musicPlayer }
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
  background: rgb(237, 237, 237);
  width: 10px;
}
#main::-webkit-scrollbar-thumb {
  // background: rgba(22, 160, 132, 0.651);
  background: rgb(0, 122, 204);
}
.home_aside {
  .wh(20%, 100%);
  .miwh(20%, 100%);
  float: right;
  background: #ededed;
  position: relative;
}
#canvas{
  .wh(100%,100%);
  .ab(t,0px);
  // z-index: -1;
}
.login_con {
  .ab(t, 20px);
  right: 20px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}
.login_con > img {
  .wh(20px, 20px);
  margin-right: 5px;
}
.router-view-enter-active {
  transition: all 0.5s ease;
}
.router-view-enter {
  transform: translateX(500px);
}
.router-view-enter-to {
  transform: translateX(0px);
}
</style>

