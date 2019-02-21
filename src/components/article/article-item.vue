<template>
  <div class="ar_item_con">
    <article
      class="ar_item_wrapper"
      v-for="(item,index) of articles"
      :key="index"
      @click="toArticleItem(item.id)"
    >
      <!-- <div class="ar_item_cover"> -->
      <img class="ar_item_cover" :src="item.coverUrl">
      <!-- </div> -->
      <div class="ar_item_header">
        <div class="ai_header_userinfo">
          <span class="ui_nickname">
            <a href="#">
              <strong>{{item.author}}</strong>
            </a>
            .
          </span>
          <span class="ui_posttime">{{item.date}}</span>
        </div>
        <div class="ai_header_title">{{item.title}}</div>
        <div class="ai_header_state">评论: {{item.comment_num}} . 喜欢: {{item.like_num}}</div>
      </div>
      <div class="ar_item_desc" v-html="item.desc">&nbsp;&nbsp;{{item.desc}}</div>
    </article>
  </div>
</template>
<script>
export default {
  props: ["articles"],
  mounted(){console.log('article-items mouted',this)},
  watch: {
    articles(newVal, oldVal) {
      console.log("articles-item", newVal);
    }
  },
  methods: {
    toArticleItem(articleId) {
      this.$router.push({
        path: "/article-detail",
        query: { article_id: articleId }
      });
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/less/tool.less";
.ar_item_con {
  overflow: auto;
  .wh(100%, auto);
  padding-bottom: 80px;
  cursor: pointer;
  // margin: 0 auto;
}
.ar_item_wrapper {
  border-bottom: 1px dashed #ccc; /* no */
  //   .clearfix();
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 96px;
}
.ar_item_cover {
  .wh(100px, 100px);
  float: right;
}
.ar_item_header {
  margin-bottom: 10px;
}
.ai_header_userinfo {
  margin-bottom: 5px;
  color: #999;
}
.ui_nickname strong {
  font-weight: 700;
  color: #999;
}
.ai_header_title {
  // color: #16a085;
  color: rgb(0, 122, 204);
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}
.ai_header_state {
  color: #999;
}
.ar_item_desc {
  font-size: 14px;
}
</style>

