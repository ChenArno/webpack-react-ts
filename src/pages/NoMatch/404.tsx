/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 14:40:25
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 14:41:51
 */
import React from 'react'
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom'

const Result404: React.FC<any> = props => {
	const naviagete = useNavigate();

	return <div className="lay-center">
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={<Button type="primary" onClick={() => { naviagete('/login') }}>返回主页</Button>}
		/>
	</div>
}

export default Result404