<template>
  <div class="poster_con">
    <div class="poster"></div><!--
      --><slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.poster_con {
  .wh(100%, 100%);
  overflow-y: hidden;
}
.poster {
  .wh(25%, 100%);
  background:url('~@/assets/images/bg1.jpg') ;
  background-size: cover;
  background-position: center 0;
  display: inline-block;
}
</style>
