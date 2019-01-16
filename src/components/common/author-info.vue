<template>
  <div class="ad_header">
    <img :src="avatarUrl" alt="作者头像" class="ad_header_left">
    <div class="ad_header_right">
      <div class="ad_header_time">
        <span class="ad_header_author">作者</span> Carry On Hxy 2019.01.14 23:38:00
      </div>
      <div class="ad_header_moto">掌控了自己就掌控了世界</div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
              avatarUrl:
        "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLRbCnyAoRJV0uUSoDDzKDOoic6GxdcQsuzUhdSH8KfYPqkj3IEMBO6ZqyxjZ5gCfFkqbxAickaefzA/132"
        }
    }
};
</script>
<style lang="less">
@import "~@/assets/less/tool.less";
.ad_header {
  .fl_cet(al, row);
  padding: 20px 0px;
  border-bottom: 1px solid #eee;
}
.ad_header_left {
  .wh(50px, 50px);
  border-radius: 50%;
  margin-right: 15px;
}
.ad_header_time {
  margin-bottom: 8px;
}
.ad_header_author {
  border-radius: 3px;
  border: 1px solid skyblue;
  color: skyblue;
  padding: 1px 2px;
}
</style>
