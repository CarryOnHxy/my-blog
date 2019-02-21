<template>
  <!-- ve === video-editro -->
  <div class="ve_con">
    <input class="ve_title" type="text" placeholder="请输入视频标题" v-model="title">
    <div class="ve_detail">
      <img
        src="@/assets/images/icon/add.png"
        class="ve_detail_add"
        alt="添加视频"
        v-show="isShowAdd"
        @click="showUrl"
      >
      <div class="ve_url" v-show="isShowUrl">
        <input class="ve_url_input" type="text" v-model="videoUrl" placeholder="请输入视频url">
        <div class="ve_sure_url">
          <div class="ve_sure" @click="showVideo">确定</div>
        </div>
      </div>
      <div class="ve_detail_show" v-if="isShowVideo">
        <video controls :src="videoUrl"></video>
        <img class="ve_detail_change" src="@/assets/images/icon/close.png" @click="showAdd">
      </div>
    </div>
    <div class="ve_submit_con">
      <button class="ve_submit" @click="submit">提交</button>
    </div>
  </div>
</template>
<script>
import { setVideo } from "@/api/video";
export default {
  data() {
    return {
      isShowAdd: true,
      isShowUrl: false,
      isShowVideo: false,
      videoUrl: "",
      title: ""
    };
  },
  methods: {
    submit() {
      setVideo({
        src: this.videoUrl,
        title: this.title,
        timestamp: Date.now()
      }).then(res => {
          if(res.data.insertedNum>0){
              alert('增加视频成功');
              this.$router.replace({path:'/video'});
          }
      });
    },
    showUrl() {
      this.isShowUrl = true;
      this.isShowAdd = false;
    },
    showVideo() {
      this.isShowUrl = this.isShowAdd = false;
      this.isShowVideo = true;
    },
    showAdd() {
      this.isShowAdd = true;
      this.isShowUrl = this.isShowVideo = false;
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.ve_con {
  .wh(100%, 100%);
  .fl_cet(al, column);
  position: relative;
}
.ve_title {
  .wh(90%, auto);
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 20px;
  text-indent: 20px;
  padding: 10px 0;
}
.ve_title::placeholder {
  font-style: italic;
}
.ve_detail {
  .wh(90%, 300px);
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
  .fl_cet();
}
.ve_detail_add {
  .wh(100px, 100px);
}
.ve_detail_show {
  .wh(100%, 100%);
  position: relative;
  overflow: hidden;
}
.ve_url {
  .wh(100%, 100%);
  background: rgba(51, 51, 51, 0.123);
  border-radius: 10px;
  .fl_cet();
  .ab(t, 0rpx);
}
.ve_url_input {
  .wh(70%, auto);
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 18px;
  text-indent: 18px;
  padding: 10px 0;
}
.ve_sure_url {
  .wh(100%, auto);
  .ab(b, 20px);
}
.ve_sure {
  float: right;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid rgba(51, 51, 51, 0.726);
  .wh(100px, 30px);
  .txt_cet(30px);
  font-size: 15px;
  cursor: pointer;
}
.ve_submit_con {
  .wh(90%, auto);
  margin-top: 20px;
}
.ve_submit {
  .wh(80px, 40px);
  float: right;
  right: 15px;
  border: 1px solid rgb(169, 169, 169);
  border-radius: 10px;
  background: whitesmoke;
  outline: none;
  color: rgba(0, 0, 0, 0.452);
  cursor: pointer;
}
.ve_submit:hover {
  color: #333;
}
.ve_detail_show > video {
  .wh(100%, 100%);
  border-radius: 10px;
}
.ve_detail_change {
  .wh(50px, 50px);
  .ab(r, 10px);
  top: 10px;
}
</style>
