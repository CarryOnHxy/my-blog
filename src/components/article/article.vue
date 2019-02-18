<template>
  <div class="article_con">
    <article-item :articles="articleList"/>
  </div>
</template>
<script>
import articleItem from "./article-item.vue";
import {formatTime} from "@/lib/tool"
// import { mockData } from "../../../public/js/mock-data.js";
import { getArticleList,getArticleInCate} from "@/api/article";
export default {
  props:['categroryId'],
  data() {
    return {
      articleList: []
    };
  },
  mounted() {
    if(this.categroryId){
      getArticleInCate({categroryId:this.categroryId}).then(res=>{
      console.log(res)
        this.articleList = this.createArticleDesc(res.data.articleList);
      })
    }else{
      getArticleList().then(res => {
        this.articleList = this.createArticleDesc(res.data.articleList);
      });
    }
  },
  methods:{
    createArticleDesc(articleList){
      return articleList.map(ele => {
        /* 从文章中筛选出文章描述 */
        let { year, month, day } = formatTime(ele.timestamp),
            reg = new RegExp(/([\u4e00-\u9fa5])/),
            desc = "";
        ele.date = `${month}月${day}日`;

        for(let i =0;i<ele.detail.length;i++){
          desc+= (reg.test(ele.detail[i])?ele.detail[i]:"")
          if(desc.length > 80) break;
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


