<template>
  <div class="login_con">
    <div class="login_wrapper">
      <div class="login_title">Welcome</div>
      <form action method="post" class="login_form" @submit.prevent="login">
        <input type="text" 
        class="login_username" 
        name="username" 
        placeholder="用户名" 
        v-model="userName">
        <input type="password" 
        class="login_password" 
        name="password" 
        v-model="password"
        placeholder="密码">
        <button class="login_submit">登录</button>
      </form>
      <p class="login_index"><router-link to="/">返回首页</router-link></p>
    </div>
  </div>
</template>
<script>
import {toLogin} from "@/api/login";

export default {
  data(){
    return{
      userName:'',
      password:''
    }
  },
    methods:{
        login(){
            toLogin({username:this.userName,password:this.password}).then(res=>{
              if(res.data.loginState === true){
                document.cookie = `loginState=${res.data.loginState}`;
                this.$router.push({path:'/quill'});
              }else{
                alert('用户名或者密码输入错误')
              }
            })
        }
    }
};
</script>
<style lang="less" scoped>
@import "~@/assets/less/tool.less";
.login_con {
  .wh(100%, 100%);
  background: #f6f6f3;
  overflow: auto;
}
.login_wrapper {
  .wh(40%, 50%);
  margin: 100px auto;
//   background: pink;
}
.login_title {
  .wh(100%, 50px);
  color: #16a085;
  .txt_cet(50px);
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 10px;
}
.login_form {
    .fl_cet(al, column);
    font-size: 18px
}
.login_form>input{
    width: 50%;
    height: 40px;
    padding:5px 10px;
    box-sizing: border-box;
    border: 1px solid #ccc; /* px */
    border-radius: 10px;/* px */
}
.login_username {
    margin-bottom: 10px;
}
.login_password{
    margin-bottom: 10px;
}
.login_submit{
    .wh(50%,40px);
    background: #16a085;
    color: #fff;
    border: none;
    margin-bottom: 20px;
    cursor: pointer;
}
.login_index{
    text-align: center;
}
a:visited{
    color: skyblue
}
a:hover{
    color: rebeccapurple
}

</style>



