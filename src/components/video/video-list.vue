<template>
  <div class="video_list_con">
    <div class="video_item" v-for="(item,index) of videoList" :key="index">
      <div class="video_time">2019年1月15</div>
      <div class="video_author_text">我发现了一个好笑的视频分享于你</div>
      <video class="video_detail" :src="videoUrl" controls></video>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoUrl:
        "http://video.qzone.qq.com/tjg_1793131838_1047_fd306f1e15794e9d9503649bab1dvide.f20.mp4?ptype=http&dis_k=fb848cd4a406eba51989604455d6bfdf&dis_t=1547557965",
      videoList: [{}, {}, {}, {}, {}, {}]
    };
  }
};
</script>
<style lang="less">
@import "~@/assets/less/tool.less";

.video_item {
  font-size: 15px;
  color: #333;
  border: 1px solid #eee;
  border-radius: 10px;
  width: 100%;
  margin-top: 30px; 
}
.video_time {
  .wh(100%, 50px);
  font-size: 30px;
  color: #16a085;
  line-height: 50px;
  text-indent: 10px;
}
.video_author_text {
  text-indent: 10px;
}
.video_detail {
  display: block;
  margin: 20px auto;
  .wh(100%, 300px);
  background: #000;
}
</style>
