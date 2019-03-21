<template>
  <!-- music-player -> mc -->
  <div class="mc_con">
    <audio :src="currentMusic.src" hidden ref="audio"></audio>
    <div class="mc_cover" :style="{backgroundImage:'url('+currentMusic.cover+')'}"></div>
    <div class="mc_info">
      <p class="mc_name">{{currentMusic.name}}</p>
      <p class="mc_singer">{{currentMusic.singer}}</p>
    </div>
    <div class="mc_progress_con">
      <div class="mc_progress_detail" :style="{width:progressRate}"></div>
    </div>
    <div class="mc_option">
      <div class="mc_option_detail">
        <img
          :src="currentMusicState['isPlaying']?require('@/assets/images/icon/pause.png'):require('@/assets/images/icon/play.png')"
          alt="暂停/播放"
          @click="handleMusicState"
        >
        <img src="@/assets/images/icon/previous.png" alt="上一首" @click="previousSong">
        <img src="@/assets/images/icon/next.png" alt="下一首" @click="nextSong">
      </div>
    </div>
  </div>
</template>
<script>
import { getMusicList } from "@/api/music";

export default {
  data() {
    return {
      musicList: [],
      currentMusicIndex: 0,
      currentMusicState: {
        duration: 0,
        isPlaying: false,
        currrentTime: 0
      }
    };
  },
  computed: {
    /* 当前音乐信息 */
    currentMusic() {
      return (
        this.musicList.length > 0 && this.musicList[this.currentMusicIndex]
      );
    },
    /* 进度比例 */
    progressRate() {
      let progressRate =
        this.currentMusicState["currrentTime"] /
        this.currentMusicState["duration"];
      return progressRate * 100 + "%";
    }
  },
  methods: {
    /* 播放音乐 */
    handleMusicState() {
      if (this.currentMusicState["isPlaying"]) {
        this.pauseSong();
      } else {
        this.playSong();
      }
    },
    pauseSong() {
      this.$refs["audio"].pause();
      this.currentMusicState["isPlaying"] = false;
    },
    playSong() {
      this.$refs["audio"].play();
      this.currentMusicState["isPlaying"] = true;
    },
    nextSong() {
      this.currentMusicIndex = ++this.currentMusicIndex % this.musicList.length;
    },
    previousSong() {
      if (--this.currentMusicIndex < 0)
        this.currentMusicIndex = this.musicList.length - 1;
    },
    /* 音乐监听事件 */
    musicListener() {
      let audio = this.$refs["audio"];
      /* 监听是否可以播放,注意！ Chrome中用户无操作界面无法自动播放 */
      audio.oncanplay = () => {
        if (this.currentMusicState["isPlaying"]) {
          audio.play();
        }
      };
      audio.ontimeupdate = () => {
        this.currentMusicState["currrentTime"] = audio.currentTime;
      };
      audio.ondurationchange = () => {
        this.currentMusicState["duration"] = audio.duration;
      };
      audio.onended = () => {
        this.currentMusicState["isPlaying"] = false;
      };
      /* 当视频播放的时候音乐需要暂停 */
      this.$bus.$on('pauseMusicPlayer',()=>{
        this.pauseSong();
      })
    }
  },
  mounted() {
    getMusicList().then(res => {
      this.musicList = res.data.musicList;
    });
    this.$nextTick(() => {
      this.musicListener();
    });
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
/* mc->music-player */
.mc_con {
  .wh(200px, 250px);
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  z-index: 1;
  .po_cet_x();
  bottom: 10px;
  background: #fff;
  .fl_cet(al, column);
}
.mc_cover {
  .wh(100%, 80px);
  background-size: cover;
  background-position: center 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.mc_info {
  .wh(95%, auto);
  margin-top: 30px;
}
.mc_info > .mc_name {
  color: #555f6a;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
}
.mc_progress_con {
  margin: 10px auto;
  .wh(95%, 5px);
  background: #414141;
  border-radius: 10px;
}
.mc_progress_con > .mc_progress_detail {
  .wh(auto, 100%);
  border-radius: 10px;
  background: #ced6d9;
}
.mc_option {
  .wh(95%, auto);
  .clearfix();
}
.mc_option > .mc_option_detail {
  .fl_cet(al, row);
}
.mc_option_detail > img {
  .wh(40px, 40px);
  margin-right: 5px;
  cursor: pointer;
}
.mc_option_detail > img:hover {
  transform: scale(1.1);
}
.mc_option_detail > img:nth-child(1) {
  .wh(50px, 50px);
}
</style>

