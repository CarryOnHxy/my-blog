<template>
  <div class="search_bar_con">
    <router-link class="search_bar_tag" to="/">最新动态</router-link>
    <div class="search_bar_detaill">
      <input 
      type="text" 
      class="search_bar_input" 
      placeholder="请输入关键字搜索" 
      @keyup.enter="toSearch"
      v-model="queryKey"
      />
    </div>
  </div>
</template>
<script>
import { searchArticle } from "@/api/article";
export default {
  data(){
    return {
      queryKey:''
    }
  },
    methods:{
      toSearch(e){
        // if(e.key ==='Enter'){
          // searchArticle({queryKey:this.queryKey}).then(res=>{
            this.$router.replace({path:'/article',query:{isSearched:true,queryKey:this.queryKey}})
            // this.$bus.$emit('emitSearchResult',res.data);
            console.log('from toSearch')
          // })
        // }
      }
    }
}
</script>
<style lang="less">
  @import "~@/assets/less/tool.less";
  .search_bar_con{
      .wh(100%,45px);
      border-bottom: 2px solid rgb(223, 222, 222);
    //   background: skyblue
  }
  .search_bar_tag{
      float: left;
      margin-left: 15px;
      height: 45px;
      .txt_cet(45px);
      font-size: 14px;
      color: #979797;
      padding: 0 6px;
  }
  .search_bar_tag:hover{
      background: #ededed;
      border-bottom:  2px solid #555;
      color:#555  ;
      cursor: pointer;
  } 
  .search_bar_detaill{
      .wh(200px,100%);
    //   background: sandybrown;
      float:right;
      margin-right: 15px;
      .txt_cet(45px);
  }
  .search_bar_detaill>input{
      .wh(100%,33px);
      border: 1px solid #ccc;
      border-radius: 10px;
      padding-left: 10px;
      font-size: 14px;
      background-image: url(~@/assets/images/icon/search.png);
      background-size: 20px 20px;
      background-repeat: no-repeat;
      background-position: 180px center
  }
</style>

