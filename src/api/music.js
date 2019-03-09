import axios from './index'
export const getMusicList = (params = {})=>{
    return axios.request({
        url:'/music/getMusicList',
        method:'get',
        params
    })
}