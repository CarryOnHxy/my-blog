import axios from './index'
export const getVideoList = () => {
    return axios.request({
        url: '/video/getVideo',
        method: 'get'
    })
}