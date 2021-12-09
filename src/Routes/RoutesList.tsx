/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 13:50:02
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 16:34:50
 */

import { useRoutes, RouteObject } from 'react-router-dom';
import BasicLayouts from '@/layouts/BasicLayout';
import NoMatch from '@/pages/NoMatch/404'
import { allRoutes } from './rootRoue';
import { RouterState } from './data'

const list: RouteObject[] = allRoutes.map((item: RouterState) => {
	// 有子菜单
	const children: RouteObject[] = item.childRoutes?.map(({ path, component: Component }: RouterState) => ({
		path,
		element: <Component />
	})) || [{
		path: item.path,
		element: <item.component />
	}];	// 没有子菜单

	return {
		path: '/',
		element: <BasicLayouts />,
		children: children
	}
});

console.log(list)
const RoutesList = () => {
	return useRoutes([
		...list,
		{
			path: '*',
			element: <NoMatch />
		}]);
}

export default RoutesList