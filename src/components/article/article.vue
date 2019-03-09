<template>
  <div class="article_con">
    <!-- {{testNum}} -->
    <article-item :articles="articleList"/>
  </div>
</template>
<script>
import articleItem from "./article-item.vue";
import { formatTime } from "@/lib/tool";
import { getArticleList, getArticleInCate, searchArticle } from "@/api/article";
import { setNavBarState, cancelOnSearchRes } from "@/lib/util";
import { getCommentList} from "@/api/comment";
import { mockData } from "../../../public/js/mock-data.js";
const NAV_BAR_INDEX = 0;
export default {
  props: ["categroryId", "isSearched", "queryKey"],
  data() {
    return {
      articleList: [],
      testNum: 0
    };
  },
  watch: {
    articleList(newVal) {
      console.log("更新articleList", newVal);
    }
  },
  mounted() {

    /* 更新navbar状态 */
    setNavBarState(this, NAV_BAR_INDEX);
    /* 更新搜索结果  
      BUG:B页面中使用搜索栏跳转到此页面，触发bus.$on回调，回调里修改试图数据失败！！！
    */
    // this.$bus.$on("emitSearchResult", val => {

    //     this.articleList = this.createArticleDesc(val.articleList);
    //     this.testNum = 10000000;
    //     console.log("emitSearchResult", this.articleList);

    // });
    if (this.isSearched) {
      searchArticle({ queryKey: this.queryKey }).then(res => {
        this.articleList = this.createArticleDesc(res.data.articleList);
      });
    }
    if (!this.isSearched) {
      if (this.categroryId) {
        getArticleInCate({ categroryId: this.categroryId }).then(res => {
          console.log(res);
          this.articleList = this.createArticleDesc(res.data.articleList);
        });
      } else {
        getArticleList().then(res => {
          this.articleList = this.createArticleDesc(res.data.articleList);
        });
      }
    }
  },
  /* 此页面上搜索关键词 */
  beforeRouteUpdate(to,from,next) {
    console.log("beforeRouteUpdate",to);
    if (to.query.queryKey) {
      searchArticle({ queryKey: to.query.queryKey }).then(res => {
        this.articleList = this.createArticleDesc(res.data.articleList);
      });
    }
  },
  methods: {
    createArticleDesc(articleList) {
      return articleList.map(ele => {
        /* 从文章中筛选出文章描述 */
        let { month, day } = formatTime(ele.timestamp),
          reg = new RegExp(/([\u4e00-\u9fa5])/),
          desc = "";
        ele.date = `${month}月${day}日`;

        for (let i = 0; i < ele.detail.length; i++) {
          desc += reg.test(ele.detail[i]) ? ele.detail[i] : "";
          if (desc.length > 80) break;
        }
        // console.log(desc)
        ele.desc = desc;
        return ele;
      });
    }
  },
  components: { articleItem }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.article_con {
  .wh(90%, 100%);
  .miwh(80%, 100%);
  margin: 0 auto;
}
</style>


