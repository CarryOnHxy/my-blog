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
export const insertArticle = (data={})=>{
    return axios.request({
        url:'/article/insertArticle',
        method:'post',
        data
    })
}
export const setArticle = (data={})=>{
    return axios.request({
        url:'/article/updateArticle',
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
export const searchArticle = (params = {})=>{
    return axios.request({
        url:'/article/selectArticleByKey',
        method:'get',
        params
    })
}
export const deleteArticle = (params = {})=>{
    return axios.request({
        url:'/article/deleteArticle',
        method:'get',
        params
    })
}