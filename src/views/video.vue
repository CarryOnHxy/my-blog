<template>
  <div class="video_con">
    <div class="video_wrapper">
      <author-info/>
      <video-list />
    </div>
  </div>
</template>
<script>
import authorInfo from "@/components/common/author-info.vue";
import videoList from "@/components/video/video-list.vue";
export default {
  data() {return{
    
  }},
  components: {
    authorInfo,
    videoList
  }
};
</script>
<style lang="less">
@import "~@/assets/less/tool.less";
.video_con {
  .wh(100%, 100%);
}
.video_wrapper{
  .wh(90%,auto);
  margin: 0 auto;
}

</style>

