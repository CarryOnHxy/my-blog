<template>
  <div class="comment_con" >
    <div class="comment_list" v-if="commentList.length>0">
      <div class="comment_detail" v-for="(item,index) of commentList" :key="index">
        <div class="comment_other_detail" v-if="item.reply_id != 0">
          <p class="comment_other_nickname">{{item.otherNickname}} 于 {{item.otherDate}}说</p>
          <p class="comment_other_text">{{item.otherContent}}</p>
        </div>
        <p class="comment_detail_info">{{item.nickName}} 于 {{item.date}} {{item.reply_id != 0 ?'回复':'说'}}:</p>
        <p class="comment_detail_text" v-html="item.content"></p>
        <div class="comment_detail_replay" @click="toComment(index)">{{item.isClicked?'取消回复':'回复'}}</div>
        <transition name="comment_animation">
         <commentEditor 
         v-show="item.isClicked" 
         :replyId="item.id"  
         @close-comment="closeComment"
         :articleId="articleId"
         />
        </transition>
      </div>
    </div>
    <hr class="comment_divider"/>
    <commentEditor :style="{visibility:isReplyOther?'visible':'hidden'}" :articleId="articleId"/>
  </div>
</template>
<script>
/* 
    1.评论功能逻辑
        A.点击回复，将要回复的内容加入textarea框里，并加上引用标签，
        B.提交评论数据，同时要带上被评论的ID
        D.后端将评论信息发送给被评论者邮箱
*/
import { getCommentList, addComment } from "@/api/comment";
import { formatTime } from "@/lib/tool";
import commentEditor from "_c/comment/comment-editor.vue";
export default {
  data() {
    return {
      commentList: []
    };
  },
  props: ["articleId"],
  computed:{
      isReplyOther(){
        return this.commentList.every(ele=>!ele.isClicked) //没有点击回复按钮证明没有回复他人
      }
  },
  methods: {
    toComment(commentIndex) {
      /* 点击回复出现评论框，再次点击取消回复 */
      if (!this.commentList[commentIndex].isClicked) {
        this.commentList.forEach((ele, idx, arr) => {
          idx === commentIndex
            ? (arr[idx].isClicked = true)
            : (arr[idx].isClicked = false);
        });
      } else {
        (this.commentList[commentIndex].isClicked = false),
          (this.currentReplyedComment = -1);
      }
    },
    closeComment(){
      this.commentList = this.commentList.map(ele => {
        ele.isClicked=false;
        return ele;
      })
    }
  },
  mounted() {
    getCommentList({ id: this.articleId }).then(({ data }) => {
      this.commentList = data.commentList.map(ele => {
        ele.isClicked = false;
        ele.date = `${formatTime(ele.timestamp).year}-${formatTime(ele.timestamp).month}-${formatTime(ele.timestamp).day}`;
        ele.otherDate = `${formatTime(ele.otherTimestamp).year}-${formatTime(ele.otherTimestamp).month}-${formatTime(ele.otherTimestamp).day}`;
        return ele;
      });
    });
  },
  components: { commentEditor }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.comment_con {
  padding-top: 15px;
  .clearfix();
}

.comment_list {
  margin-bottom: 10px;
  border-top: 1px dotted #cccccc;
  .fl_cet(al, column);
}
.comment_detail {
  border-top: 1px solid rgb(231, 228, 228);
  padding: 10px 5px;
  .wh(95%, auto);
}
.comment_detail_info {
  font-size: 16px;
  margin-bottom: 10px;
}
.comment_detail_text {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  padding-left: 15px;
}
.comment_detail_replay {
  text-align: right;
  cursor: pointer;
}
.comment_detail_replay:hover {
  color: purple;
}
.comment_other_detail{
  background: #cccccc;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 5px;
}
.comment_other_nickname{
  font-size: 15px;
  margin-bottom: 10px;
}
.comment_other_text{
  padding-left: 16px;
}
.comment_divider{
  margin-bottom: 10px;
}
.comment_animation-enter-active,.comment_animation-leave-active{
  transition: height 1s;
}
.comment_animation-enter,.comment_animation-leave-to{
  height:0px;
}
.comment_animation-enter-to,.comment_animation-leave{
  height: 375px;
}
</style>

