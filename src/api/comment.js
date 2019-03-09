import axios from './index'
export  const getCommentList = (params = {})=>{
    return axios.request({
        url:'/comment/getCommentList',
        method:'get',
        params
    })
}
export const addComment = (data={})=>{
    return axios.request({
        url:'/comment/addComment',
        method:'post',
        data
    })
}