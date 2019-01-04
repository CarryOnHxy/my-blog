<template>
  <div class="poster_con">
    <div class="poster"></div>
    <slot class="main"></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.poster_con {
  .wh(100%, 100%);
}
.poster {
  .wh(25%, 100%);
  border: 1px solid aquamarine;
}
</style>
