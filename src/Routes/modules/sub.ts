/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 16:02:25
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 16:13:28
 */
import { lazy } from "react";

const App = {
	id: 2000,
	label: '菜单',
	key: '12',
	icon: 'iconshouye',
	path: '/',
	childRoutes: [{
		id: 2001,
		label: '菜单1',
		key: '14',
		path: '/sub1',
		component: lazy(() => import('@/pages/sub1'))
	}, {
		id: 2002,
		label: '菜单2',
		key: '15',
		path: '/sub2',
		component: lazy(() => import('@/pages/sub2'))
	}]
}
export default App