import axios from './index'
export  const getCategroryList = ()=>{
    return axios.request({
        url:'/categrory/getCategrory',
        method:'get'
    })
}