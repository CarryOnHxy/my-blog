const path = require('path');
const resolve = dir=>path.join(__dirname,dir);
/* process为webpack的全局变量 ,设置生产环境与开发环境的路径*/
const BASE_URL = process.env.NODE_ENV  ==='production' ?'/':'/'
module.exports ={
    baseUrl:BASE_URL,/* 指定外部访问项目的根路径 */
    chainWebpack:config=>{ /* 为路径设置别名 */
        config.resolve.alias
        .set('@',resolve('src'))
        .set('_c',resolve('src/components'))
    },
    productionSourceMap:false,/* 打包时不生产map文件，加快打包速度以及 */
    devServer:{
        proxy:"http://localhost:80" /* 设置跨域访问，当开发者服务器访问不到静态资源，将由此url代理 */
    }
}