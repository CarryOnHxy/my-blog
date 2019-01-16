<template>
  <!-- ad = article-detail -->
  <div class="ad_con">
    <author-info />
    <!-- <div class="ad_header">
      <img :src="avatarUrl" alt="作者头像" class="ad_header_left">
      <div class="ad_header_right">
        <div class="ad_header_time">
          <span class="ad_header_author">作者</span> Carry On Hxy 2019.01.14 23:38:00
        </div>
        <div class="ad_header_moto">掌控了自己就掌控了世界</div>
      </div>
    </div> -->
    <article class="ad_text" v-html="html"></article>
  </div>
</template>
<script>
import authorInfo from "@/components/common/author-info.vue"
export default {
  data() {
    return {
      html: `<p><br></p><h2>二、目录结构</h2><p>基本的目录结构如下所示：</p><p><img src="http://static.ptbird.cn/usr/uploads/2019/01/823019488.jpg" alt="1.jpg">asdasddadd</p><p>sssssss</p>`
    };
  },
  components:{authorInfo}
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.ad_con {
    .wh(100%,100%);
    .miwh(100%,100%);
    // background: antiquewhite;
    // overflow: scroll;
    padding: 0px 50px;
    box-sizing: border-box;
    padding-bottom: 50px;
}


</style>
