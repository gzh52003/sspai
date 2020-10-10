/**
 * axios 发起请求
 */

import axios from 'axios'
import { Toast } from 'antd-mobile'


const request = axios.create({
    baseURL: 'http://120.78.186.169:3002/api',
    withCredentials: true
})

//  请求拦截
request.interceptors.request.use(function (config) {
    Toast.info('This is a toast tips !!!', 1);
    return (config)
}, function (error) {
    return Promise.reject(error)
})
//  相应拦截
request.interceptors.response.use(function (response) {
    Toast.hide()
    return response
}, function (error) {
    return Promise.reject(error)
})

// 发起get请求
export async function get(url, data, config = {}) {
    const { data: result } = await request({
        ...config,
        url,
        method: 'get',
        params: data
    })
    return result
}

//  发起post请求
export async function post(url, data, config = {}) {
    const { data: result } = await request({
        ...config,
        data,
        url,
        method: 'post'
    })
    return result
}

//  发起put请求
export async function put(url, data, config = {}) {
    const { data: result } = await request.put(url, data, config)
    return result
}

//  发起delete请求
export async function remove(url, data, config = {}) {
    const { data: result } = await request.delete(url, {
        ...config,
        params: data
    })
    return result
}

export default {
    get,
    post,
    put,
    remove
}