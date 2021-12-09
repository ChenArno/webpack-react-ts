/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 15:59:58
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 17:57:57
 */

import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getMyUserInfo } from './service'

const Sub1 = () => {
	// 路由参数引导
	const { key } = useParams();

	useEffect(() => {
		console.log(key);
		getMyUserInfo({ id: 1 }).then(res => {
			console.log(res);
		});
	}, [])

	return <div>sub1</div>
}

export default Sub1