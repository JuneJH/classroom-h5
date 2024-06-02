import { getTokenByStorage } from '@/utils/storage';
import axios from 'axios';


const request = axios.create({
    timeout: 5000
})


// 添加请求拦截器
request.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么，比如添加认证信息、设置请求头等
        config.headers.Authorization = getTokenByStorage(); // 替换为你的认证信息
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
request.interceptors.response.use(
    function (response) {
        // 对响应数据做些什么，比如处理特定的错误状态码
        return response;
    },
    function (error) {
        // 对响应错误做些什么，比如处理网络错误或者服务端返回的错误信息
        return Promise.reject(error);
    }
);

export default request;