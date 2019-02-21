import axios from './index'
export const getVideoList = () => {
    return axios.request({
        url: '/video/getVideo',
        method: 'get'
    })
}
export const setVideo = (data={}) =>{
    return axios.request({
        url: '/video/setVideo',
        method: 'post',
        data
    })
}