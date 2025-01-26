import axios from 'axios';
import {Login} from "@/API/LoginApi.js";

// 创建 axios 实例
const http = axios.create({
    baseURL: 'http://localhost:8080',  // 替换为您的 API 基础地址
    timeout: 5000,  // 请求超时时间
});

// 请求拦截器
http.interceptors.request.use(
    (config) => {
        // 在请求发出之前做些什么
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 请求错误时做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    (response) => {
        // 对响应数据做些什么
        return response.data;
    },
    (error) => {
        // 对响应错误做些什么
        if (error.response.status === 401) {
            // 如果是 401 错误，跳转到登录页
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// 导出 axios 实例
export default http;
