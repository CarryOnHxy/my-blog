<template>
  <div class="poster_con">
    <div class="poster">
      <div class="poster_author">
        <!-- pa ==  poster_author-->
        <img src="@/assets/images/avatar.jpg" alt="作者头像">
        <p class="pa_name">Carry On Hxy</p>
        <p class="pa_motto">路漫漫其修远兮，吾将上下而求索</p>
      </div>
    </div>
    <slot></slot>
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
  background: url("~@/assets/images/bg2.jpg");
  background-size: cover;
  background-position: center 0;
  display: inline-block;
  position: relative;
}
.poster_author {
  .wh(100%, 25%);
  .ab(b, 0px);
  .fl_cet(al, column);
}
.poster_author > img {
  .wh(80px, 80px);
  .miwh(80px,80px);
  border-radius: 50%;
  margin-bottom: 10px;
}
.poster_author>p{
  color: #ededed;
  font-size: 14px;
  margin-bottom: 10px;
}
.poster_author>.pa_name{
  font-size: 20px;
}
</style>
