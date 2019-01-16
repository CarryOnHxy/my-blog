<template>
<!-- qd=quill-editor -->
  <div class="quill_editor_con">
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
/* eslint-disable */ 
import quillEditor from "vue-quill-editor";
export default {
  data() {
    return {
      content: null,
      editorOption: {
      
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
.quill_editor_con{
  width: 100%;
  height: 100%;
  overflow: auto
}
</style>

