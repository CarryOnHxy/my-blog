<template>
  <!-- ad = article-detail -->
  <div class="ad_con" id="ad">
    <author-info />
    <article class="ad_text" v-html="article&&article.detail"></article>
    <commentList :articleId="articleId"/>
  </div>
</template>
<script>
import authorInfo from "@/components/common/author-info.vue";
import { getArticleList } from "@/api/article";
import commentList from "_c/comment/comment-list.vue"
export default {
  props:['articleId'],
  data() {
    return {
     article:null
    };
  },
  components:{authorInfo,commentList},
  methods:{
    //
  },
  mounted(){  
    getArticleList({id:this.articleId}).then(res=>{
      this.article = res.data.article;
    })
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.ad_con {
    .wh(100%,auto);
    .miwh(100%,100%);
    padding: 0px 50px;
    box-sizing: border-box;
    padding-bottom: 50px;
}
</style>
