<template>
  <!-- qd=quill-editor -->
  <div class="quill_editor_con">
    <div class="quill_editor_title">
      <input type="text" class="quill_editor_title_input" placeholder="请输入文章标题...." v-model="title">
    </div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
      class="quill_editor_detail"
    ></quill-editor>
    <div class="quill_options">
      <select name="categrory" class="quill_options_select" @change="chooseCategrory">
        <option :value="item.id" v-for="(item,index) of cateList" :key="index">{{item.name}}</option>
      </select>
      <button class="quill_options_btn" @click="submit">提交</button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.snow.css";
import { getCategroryList } from "@/api/categrory";
import { insertArticle, getArticleList, setArticle } from "@/api/article";

let inputHtml = "",
  categroryId = 1, //默认为分类ID为1
  alertInfo = {
    noInputArticle: "没有编写文章！！",
    checkCategrory: "是否有选择正确分类",
    noTitle: "没有填写文章标题",
    editSuccess: "文章修改成功！！"
  };
export default {
  props: ["articleId", "isEdit"],
  data() {
    return {
      content: null,
      editorOption: {
        theme: "snow"
      },
      title: "",
      cateList: []
    };
  },
  mounted() {
    getCategroryList().then(res => {
      this.cateList = res.data.rows;
    });
    if (this.isEdit) {
      getArticleList({ id: this.articleId }).then(({ data }) => {
        this.content = data.article.detail;
        this.title = data.article.title;
      });
    }
  },
  methods: {
    onEditorFocus(e) {},
    onEditorBlur(e) {},
    onEditorChange(e) {
      //内容改变事件
      console.log(e.html);
      inputHtml = e.html;
    },
    chooseCategrory(e) {
      categroryId = e.target.value;
    },
    submit() {
      if (this.isEdit) {
        setArticle({
          id: this.articleId,
          condition: { detail: this.content, title: this.title }
        }).then(res => {
          if (res.data.updateRes) {
            this.$message({
              message: alertInfo["editSuccess"],
              type: "success"
            });
            this.$router.push({ name: "article-admin" });
          }
        });
      } else {
        this.insertNewArticle();
      }
    },
    insertNewArticle() {
      if (inputHtml === "")
        this.$message({ message: alertInfo["noInputArticle"], type: "error" });
      else if (this.title === "") {
         this.$message({ message: alertInfo['noTitle'], type: "error" });
      } else {
        let newHtml = `<h1><em>${this.title}</em></h1>${inputHtml}`;
        this.$confirm(alertInfo["checkCategrory"], "提示").then(res => {
          insertArticle({
            title: this.title,
            detail: newHtml,
            timestamp: Date.now(),
            categrory_id: categroryId
          }).then(() => {
            this.$router.push({ path: "/" });
          });
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.quill_editor_con {
  width: 100%;
  height: 100%;
}
.quill_editor_title {
  .wh(100%, 40px);
  .fl_cet(al, row);
  font-size: 25px;
  background: #ededed;
}
.quill_editor_title_input::placeholder {
  font-size: 20px;
}
.quill_editor_title_input {
  .wh(100%, 100%);
  font-size: 25px;
  text-indent: 15px;
}
.quill_editor_detail {
  background: #ededed;
}
.quill_options {
  // border-top: 1px #ccc solid;
  margin-top: 10px;
  .wh(100%, 80px);
  position: relative;
}
.quill_options_select {
  .wh(auto, 40px);
  .po_cet_y();
  outline: none;
  right: 100px;
  border-radius: 10px;
  background: whitesmoke;
}
.quill_options_select > option {
  border: 1px solid green;
}
.quill_options_btn {
  .wh(80px, 40px);
  .po_cet_y();
  right: 15px;
  border: 1px solid rgb(169, 169, 169);
  border-radius: 10px;
  background: whitesmoke;
  outline: none;
  color: rgba(0, 0, 0, 0.452);
  cursor: pointer;
}
.quill_options_btn:hover {
  color: black;
}
</style>

