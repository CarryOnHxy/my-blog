<template>
  <div class="nav_con">
    <nav>
      <router-link :to="item.refUrl" :class="{nav_item:true,nav_item_current:item.isClicked} "
       v-for="(item,index) of navItem" 
      :key="index"
      @click.native="chooseNavItem(index)"
      :title="item.text">
        <img :src="item.iconUrl" >
        <!-- <span class="nav_item_text">{{item.text}}</span> -->
      </router-link>
    </nav>
  </div>
</template>
<script>
const VISTOR_NAV_INDEX = 0;
const BLOGGER_NAV_INDEX = 1;
export default {
  props:['loginState'],
  data(){
    return{
      navItemList:[[
        {text:'博客首页',iconUrl:require('@/assets/images/icon/home.png'),refUrl:"/",isClicked:true},
        {text:'我的文章',iconUrl:require('@/assets/images/icon/article.png'),refUrl:"/article-cate",isClicked:false},
        {text:'我的视频',iconUrl:require('@/assets/images/icon/video.png'),refUrl:"/video",isClicked:false}
      ],
      [
        {text:'编写文章',iconUrl:require('@/assets/images/icon/edit-article.png'),refUrl:"/admin/article-admin",isClicked:true},
        {text:'插入视频',iconUrl:require('@/assets/images/icon/edit-video.png'),refUrl:"/admin/video-admin",isClicked:false},
        {text:'插入视频',iconUrl:require('@/assets/images/icon/music.png'),refUrl:"/admin/music-admin",isClicked:false}
    ]],
    currentNavIndex:0
    }
  },
  computed:{
    currentItem(){
      return this.loginState?BLOGGER_NAV_INDEX:VISTOR_NAV_INDEX
    },
    navItem(){
      return this.navItemList[this.currentItem]
    }
  },
  methods:{
    chooseNavItem(index){
      let navItem = this.navItem;
      navItem.forEach((ele,idx,arr)=>{
        arr[idx].isClicked = false;
        arr[index].isClicked = true;
      })
      this.navItemList[this.currentItem] = navItem;
      this.currentNavIndex = index;
    }
  },
  mounted(){
    this.$bus.$on('updateNavState',({currentNavIndex}) =>{
      // console.log('currentNavIndex',currentNavIndex);
      this.currentNavIndex = currentNavIndex;
      this.chooseNavItem(currentNavIndex);
    })
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.nav_con {
  .wh(50px, 100%);
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
  .wh(16px, 16px);
  margin-left: 14px;
}
.nav_item_text {
  font-size: 14px;
  margin-left: 14px;
}
.nav_item_current {
  // background: #16a085;
    background: rgb(0, 122, 204);

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



