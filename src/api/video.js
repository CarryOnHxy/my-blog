import axios from './index'
export const getVideoList = (params={}) => {
    return axios.request({
        url: '/video/getVideo',
        method: 'get',
        params
    })
}
export const setVideo = (data={}) =>{
    return axios.request({
        url: '/video/setVideo',
        method: 'post',
        data
    })
}
export const updateVideo = (data={}) =>{
    return axios.request({
        url: '/video/updateVideo',
        method: 'post',
        data
    })
}
export const deleteVideo = (params={}) =>{
    return axios.request({
        url: '/video/deleteVideo',
        method: 'get',
        params
    })
}