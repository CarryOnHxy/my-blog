<template>
  <!-- music-editor - >mc -->
  <div class="mc_con">
    <div class="mc_name">
      <span class="mc_name_txt">歌曲</span>
      <el-input placeholder="请输入歌曲名称" clearable v-model="name" class="mc_input"></el-input>
    </div>
    <div class="mc_singer">
      <span class="mc_singer_txt">歌手</span>
      <el-input placeholder="请输入歌手名称" clearable v-model="singer" class="mc_input"></el-input>
    </div>
    <div class="mc_cover">
      <span class="mc_cover_txt">封面</span>
      <el-input placeholder="请输入封面地址" clearable v-model="cover" class="mc_input"></el-input>
    </div>
    <div class="mc_src">
      <span class="mc_src_txt">歌曲地址</span>
      <el-input placeholder="请输入歌曲地址" clearable v-model="src" class="mc_input"></el-input>
    </div>
    <div class="mc_option">
      <el-button type="primary" @click="playMusic" round >{{isPlaying?'暂停':'播放'}}</el-button>
      <el-button type="primary" @click="submit" round>提交</el-button>
    </div>
    <audio :src="src" hidden ref="audio"></audio>
  </div>
</template>
<script>
import {setMusic,updateMusic,getMusicList} from '@/api/music';
export default {
  data() {
    return {
      name: "",
      singer: "",
      src: "",
      cover: "",
      isPlaying:false
    };
  },
  props:['musicId','isEdit'],
  mounted(){
      if(this.isEdit){
          getMusicList({id:this.musicId}).then(({data})=>{
              this.name = data.music.name;
              this.singer = data.music.singer;
              this.cover = data.music.cover;
              this.src = data.music.src;
          })
      }
  },
  methods:{
      submit(){
          if(this.isEdit){
        this.$confirm("确定修改音乐信息?", "提示").then(() => {
          updateMusic({
            id: this.musicId,
            condition: { name: this.name, singer: this.singer,cover:this.cover,src:this.src }
          }).then(res => {
            if (res.data.updateRes) {
              this.$message({
                message: "修改成功",
                type: "success"
              });
              this.$router.push({ name: "music-admin" });
            }
          });
        });
          }else{
              setMusic({name:this.name,singer:this.singer,cover:this.cover,src:this.src}).then(({data})=>{
                  if(data.insertedNum){
                      this.$message('新增音乐成功');
                      this.$router.push({name:'music-admin'});
                  }else{
                      this.$message('新增音乐失败');
                  }
              })
          }
      },
      playMusic(){
          let audio = this.$refs['audio'];
          if(!this.isPlaying){
              audio.play().then(res=>{
              console.log('playing',res);
              this.isPlaying = true;
    
          }).catch(error =>{
              if(error){
                  this.$message({message:'音乐地址不合法！',type:'error'})
              }
          })
          }else{
              audio.pause();
              this.isPlaying = false
          }
   
      }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.mc_con{
    padding-top: 30px;
}
.mc_con{
    font-size: 20px;
}
.mc_name,.mc_singer,.mc_cover,.mc_src{
    margin-bottom: 20px;
    box-sizing: border-box;
    padding-left: 30px;
    .clearfix();
}
.mc_input{
    width: 400px;
    float:right;
    margin-right: 100px;
}
.mc_option{
    .fl_cet(al,row);
    justify-content: center;
    margin-top: 50px;
}
.mc_pause_btn{
    .wh(100%,100%);
    opacity: 0;
    .ab(t,0px);
    left: 0px;
    z-index: 10000;
    cursor: pointer;
}
</style>

