/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 16:16:21
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 16:26:32
 */
export interface RouterState {
	id: number;
	key: number;
	label: string;
	path: string;
	component: React.ComponentType;
	childRoutes?: Array<RouterState>;
}