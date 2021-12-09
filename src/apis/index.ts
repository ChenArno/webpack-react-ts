/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 17:37:25
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 17:55:06
 */
import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
	baseURL: '/api',
	timeout: 6e4,
	headers: {
		// withCredentials: true,
		'content-type': 'application/json;charset=utf-8'
	}
})

instance.interceptors.request.use((config) => {
	if (config.data instanceof FormData) {
		// Object.assign(config.headers, config.data.getHeaders());
	}

	return config;
});

instance.interceptors.response.use((response) => {
	return response.data;
}, (error) => {
	return Promise.reject(error);
});

const create = (urlStr: string) => {
	if (typeof urlStr !== 'string') {
		throw new Error('创建请求的正确格式为 "method /url" 的形式，如 "get /news/detail" ');
	}
	// \s 空格
	// + 多个
	const [method, url] = urlStr.trim().split(/\s+/);
	if (!method || !url) {
		throw new Error('缺少请求方式或URL');
	}

	return (body = {}, opts?: any | {}) => {
		// opts ||= {};
		const options = { url, method, ...opts };
		if (method.toLowerCase() === 'get') {
			options.params = body;
		} else {
			options.data = body;
		}
		return instance(options).then(res => {
			const { status, message }: any = res;
			if (status === 2000) {
				return res.data;
			}
			if (message) {
				message.error(message);
			}
			return Promise.reject(res);
		}).catch(error => {
			message.error('网络或服务器错误，请稍后重试');
			return Promise.reject(error);
		});
	}
}

export default create;