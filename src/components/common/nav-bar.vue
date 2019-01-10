<template>
  <div class="nav_con">
    <nav>
      <router-link :to="item.refUrl" :class="{nav_item:true,nav_item_current:item.isClicked} "
       v-for="(item,index) of navItem" 
      :key="index"
      @click.native="chooseNavItem(index)">
        <img :src="item.iconUrl" :alt="item.text">
        <span class="nav_item_text">{{item.text}}</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navItem:[
       {text:'博客首页',iconUrl:require('@/assets/images/icon/home.png'),refUrl:"/",isClicked:true},
       {text:'我的文章',iconUrl:require('@/assets/images/icon/article.png'),refUrl:"/article",isClicked:false},
       {text:'我的视频',iconUrl:require('@/assets/images/icon/video.png'),refUrl:"/video",isClicked:false}
      ]
    }
  },
  computed:{
    
  },
  methods:{
    chooseNavItem(index){
      let navItem = this.navItem;
      navItem.forEach((ele,idx,arr)=>{
        arr[idx].isClicked = false;
        arr[index].isClicked = true;
      })
      this.navItem = navItem;
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.nav_con {
  .wh(170px, 100%);
  background: #2a2a2a;
  z-index: 2048;
  .fix_a(0,auto,auto,0)
}
.nav_con > nav {
  .wh(100%, auto);
}
.nav_item {
  .wh(100%, 45px);
  .fl_cet(al, row);
  color: #fff;
}
.nav_item img {
  .wh(14px, 14px);
  margin-left: 14px;
}
.nav_item_text {
  font-size: 14px;
  margin-left: 14px;
}
.nav_item_current {
  background: #16a085;
}
@media screen and (max-width: 1280px){
  .nav_item_text{
    display: none
  }
  .nav_con{
    .wh(45px,100%)
  }
}
</style>



