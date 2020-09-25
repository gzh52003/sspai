import axios from 'axios';
import store from '../store';
import {message} from 'antd';

const request = axios.create({
    baseURL:'http://120.78.186.169:3002/api',
    withCredentials:true
})

request.interceptors.request.use(function(config){
    const state = store.getState();
    config.headers.authorization = state.user.Authorization;
    message.loading('努力加载中....');
    return config;
},function(error){
    return Promise.reject(error)
})

request.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
})

export async function get(url,data,config={}){
    const {data:result} = await request({
        ...config,
        url,
        method:'get',
        params:data
    })
    return result;
}

export async function post(url,data,config={}){
    const {data:result} = await request({
        ...config,
        url,
        method:'post',
        data
    })
    return result;
}

export async function put(url,data,config={}){
    const {data:result} = await request.put(url,data,config);
    return result;
}

export async function remove(url,data,config={}){
    const {data:result} = await request.delete(url,{
        ...config,
        params:data
    });
    return result;
}

export default {
    get,
    post,
    put,
    remove
}