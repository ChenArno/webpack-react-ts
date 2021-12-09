/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 14:47:24
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 14:49:57
 */
import React from "react";
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false });

NProgress.start()

setTimeout(() => {
	NProgress.done();
}, 3000)

const Loading = () => {
	return <></>
}

export default Loading