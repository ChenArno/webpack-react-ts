/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 13:56:44
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 17:22:00
 */
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '@/store/actions/home';
import { Button } from 'antd';

interface HomeProps {

}

const Home: React.FC<HomeProps> = props => {

	const { count } = useSelector(({ home }: any) => home);
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(actions.setCount(9));
	}

	return <div>
		home{count}
		<Button onClick={onClick}>修改</Button>

	</div>
}

export default Home