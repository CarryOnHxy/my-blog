<template>
  <div class="video_list_con">
    <div class="video_item" v-for="(item,index) of videoList" :key="index">
      <div class="video_time">{{item.date}}</div>
      <div class="video_author_text">{{item.title}}</div>
      <video class="video_detail" :src="item.src" controls ref="video"></video>
    </div>
  </div>
</template>
<script>
import { getVideoList } from "@/api/video";
import { formatTime } from "@/lib/tool";
export default {
  data() {
    return {
      videoList: []
    };
  },
  methods: {
    videoListener() {
      console.log("videoListeners", this);

      Object.keys(this.$refs).forEach(ele=>console.log(ele))
    }
  },
  mounted() {
    getVideoList().then(
      res =>
        /* 转换时间戳 */
        (this.videoList = res.data.videoList.map(ele => {
          let { year, month, day } = formatTime(ele.timestamp);
          ele.date = `${year}年${month}月${day}日`;
          return ele;
        }))
    );
    this.$nextTick(() => {
      // this.videoListener();
      console.log(this)
    });
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
  color: rgb(0, 122, 204);
  line-height: 50px;
  text-indent: 10px;
}
.video_author_text {
  text-indent: 10px;
}
.video_detail {
  display: block;
  margin: 20px auto;
  .wh(100%, 350px);
  background: #fff;
  object-fit: fill;
}
</style>
