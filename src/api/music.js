import axios from './index'
export const getMusicList = (params={}) => {
    return axios.request({
        url: '/music/getMusic',
        method: 'get',
        params
    })
}
export const setMusic = (data={}) =>{
    return axios.request({
        url: '/music/setMusic',
        method: 'post',
        data
    })
}
export const updateMusic = (data={}) =>{
    return axios.request({
        url: '/music/updateMusic',
        method: 'post',
        data
    })
}
export const deleteMusic = (params={}) =>{
    return axios.request({
        url: '/music/deleteMusic',
        method: 'get',
        params
    })
}