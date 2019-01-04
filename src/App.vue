<template>
  <div id="app">
    <nav-bar/>
    <poster-com>
      <router-view/>
    </poster-com>
  </div>
</template>
<script>
import navBar from "@/components/common/nav-bar.vue";
import posterCom from "@/components/common/poster.vue";
export default {
  components: { navBar, posterCom }
};
</script>

<style>
@import "~@/assets/css/reset.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding-left: 170px;
}
</style>
