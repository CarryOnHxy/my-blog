import axios from 'axios';
class HttpRequest{
    constructor(){
        this.requestStack = []
    }
    getDefaultConfig(){
        const defaultConfig = {
            baseUrl:this.baseUrl,
            headers:{
                //
            }
        }
        return defaultConfig
    }
    request(options={}){
        const axiosInstance = axios.create();
        let newOptions = Object.assign(this.getDefaultConfig(),options);
        return axiosInstance(newOptions);
    }
}
export default HttpRequest