import axios from 'axios'
 
//创建axios的一个实例
var instance = axios.create({
    baseURL:'',
    timeout: 6000
})
 
 
// //------------------- 一、请求拦截器 
// instance.interceptors.request.use(function (config) {
 
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
     
//     return Promise.reject(error);
// });


// //-------------------  二、响应拦截器 忽略
// instance.interceptors.response.use(function (response) {
     
//     return response.data;
// }, function (error) {
//     // 对响应错误做点什么
//     console.log('拦截器报错');
//     return Promise.reject(error);
// });

export default instance