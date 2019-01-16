<template>
  <div class="article_con">
    <article-item :articles="mockData"/>
  </div>
</template>
<script>
import articleItem from "./article-item.vue";
import { mockData } from "../../../public/js/mock-data.js";
export default {
  data() {
    return {
      mockData
    };
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


