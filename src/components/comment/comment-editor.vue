<template>
  <div class="comment_wrapper" ref="comment_edit" id="comment_edit">
    <div class="comment_title">添加新评论</div>
    <textarea class="comment_content" type="text" placeholder="请输入评论" v-model="comment"></textarea>
    <div class="comment_nickname_wrapper">
      <input class="comment_nickname" type="text" placeholder="请输入昵称" v-model="nickName">
      称呼
    </div>
    <div class="comment_email_wrapper">
      <input class="comment_email" type="text" placeholder="请输入电子邮箱方便通知" v-model="email">
      邮箱
    </div>
    <button class="comment_submit" @click="submitComment">提交</button>
  </div>
</template>
<script>
import { addComment } from "@/api/comment";

export default {
  data() {
    return {
      comment: "",
      email: "",
      nickName: ""
    };
  },
  props: {
    replyId: {
      //被引用的评论
      type: Number,
      default: 0
    },
    articleId:{
      type:Number,
      default:0
    }
  },
  methods: {
    submitComment() {
      if (this.comment && this.email && this.nickName) {
        let commentData = {
          content: this.comment,
          email: this.email,
          nickName: this.nickName,
          timestamp: Date.now(),
          reply_id: this.replyId,
          article_id: this.articleId
        };
        addComment(commentData).then(res => {
          if (res.data.commentState) {
            alert("评论成功");
            if(this.replyId){
              this.$emit('close-comment');
              }else{
              this.comment = this.email = this.nickName = "";
            }
          }
        });
      } else {
        alert("请填写完整的信息");
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.comment_wrapper{
  // border: 1px red solid;
  overflow: hidden;
  .wh(100%,375px);
  position: relative;
  padding: 0px 4px;
  box-sizing: border-box;
}
.comment_title {
  font-size: 28px;
}
.comment_content {
  box-sizing: border-box;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #d6d6d6;
  .wh(100%, 150px);
  padding: 10px 14px;
  font-size: 16px;
  
}
.comment_content::placeholder,
.comment_nickname::placeholder,
.comment_email::placeholder {
  text-indent: 14px;
  font-size: 14px;
  color: #a7a3a3;
  .wh(100%, auto);
}
.comment_content::placeholder {
  text-indent: 0px;
}
.comment_nickname_wrapper,
.comment_email_wrapper {
  font-size: 18px;
  font-weight: bold;
}
.comment_nickname,
.comment_email {
  text-indent: 14px;
  border-radius: 8px;
  margin-top: 20px;
  border: 1px solid #d6d6d6;
  .wh(200px, auto);
  font-size: 16px;
  line-height: 35px;
  margin-right: 15px;
}
.comment_submit {
  margin-top: 20px;
  .wh(50px, 30px);
  border-radius: 8px;
  background: rgb(21, 167, 240);
  border: none;
  color: white;
  outline: none;
  float: right;
  cursor: pointer;
}
.comment_submit:hover {
  background: skyblue;
  color: #000;
}
.comment_content,
.comment_nickname,
.comment_email {
  transition: box-shadow 0.5s ease;
}
.comment_content:hover,
.comment_nickname:hover,
.comment_email:hover {
  box-shadow: 0px 0px 5px 2px rgba(0, 122, 204, 0.555);
}
</style>

