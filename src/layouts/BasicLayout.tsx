/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 12:50:29
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-09 09:40:15
 */
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { CopyText } from '@/components';
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;
const CopyRealText = CopyText.render;

interface BasicLayoutProps {

}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		console.log(pathname)
	}, [])

	const onClick = (e: any) => {
		navigate(e.key);
	}

	return <Layout>
		<Sider>
			<Menu onClick={onClick} mode="inline">
				<Menu.Item key="home">
					主页
				</Menu.Item>
				<Menu.SubMenu key="sub" title="菜单">
					<Menu.Item key="sub1">菜单1</Menu.Item>
					<Menu.Item key="sub2">菜单2</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		</Sider>
		<Layout>
			<Header>
				<CopyRealText title="拷贝我" />
			</Header>
			<Content>
				<Outlet />
			</Content>
		</Layout>

	</Layout>
}

export default BasicLayout;