import axios from './index'
export  const toLogin = (data = {})=>{
    return axios.request({
        url:'/login/loginBlog',
        method:'post',
        data
    })
}