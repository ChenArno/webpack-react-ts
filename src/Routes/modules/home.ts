/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 15:26:10
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 16:36:28
 */
import { lazy } from "react";
const Home = lazy(() => import('@/pages/home'));

const App = {
	id: 1000,
	label: '首页',
	key: '13',
	icon: 'iconshouye',
	path: '/home',
	component: Home
}
export default App