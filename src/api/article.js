import axios from './index'
/* eslint-disable */
export  const getArticleList = (params={})=>{
    // console.log('params',params);
    return axios.request({
        url:'/article/getArticle',
        method:'get',
        params
    })
}
export const setArticle = (data={})=>{
    return axios.request({
        url:'/article/setArticle',
        method:'post',
        data
    })
}
export const getArticleInCate = (params = {})=>{
    return axios.request({
        url:'/article/getArticleInCate',
        method:'get',
        params
    })
}