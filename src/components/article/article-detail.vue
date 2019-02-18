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
    <article class="ad_text" v-html="article&&article.detail"></article>
  </div>
</template>
<script>
import authorInfo from "@/components/common/author-info.vue";
import { getArticleList } from "@/api/article";

export default {
  props:['articleId'],
  data() {
    return {
     article:null
    };
  },
  components:{authorInfo},
  mounted(){
    getArticleList({id:this.articleId}).then(res=>{
      // console.log(res)
      this.article = res.data.article;
    })
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.ad_con {
    .wh(100%,100%);
    .miwh(100%,100%);
    padding: 0px 50px;
    box-sizing: border-box;
    padding-bottom: 50px;
}
</style>
