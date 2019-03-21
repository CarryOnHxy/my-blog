<template>
  <div class="video_list_con" ref="videoList">
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
      /* 当视频播放时候需要暂停音乐,这里之所以使用onmouseover来操作DOM，不在mount钩子操作
      是以为在mount里面无法获取v-for渲染的DOM*/
      this.$refs["videoList"].onmousemove = () => {
        this.$refs["video"].forEach((ele, idx, arr) => {
          if (!arr[idx].onplay) {
            arr[idx].onplay = () =>{
              this.$bus.$emit('pauseMusicPlayer');
            };
          }
        });
      };
    }
  },
  mounted() {
    getVideoList().then(res =>
      /* 转换时间戳 */
      {
        this.videoList = res.data.videoList.map(ele => {
          let { year, month, day } = formatTime(ele.timestamp);
          ele.date = `${year}年${month}月${day}日`;
          return ele;
        });
      }
    );
    this.$nextTick(() => {
      this.videoListener(); 
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
