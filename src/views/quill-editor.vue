<template>
  <div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>
<script>
import quillEditor from "vue-quill-editor";
export default {
  data() {
    return {
      content: null,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"] // toggled buttons
          ]
        }
      }
    };
  },
  methods: {
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange(e) {
      //内容改变事件
      console.log("editor内容改变", e);
    }
  }
};
</script>
<style lang="less" scoped>
</style>

