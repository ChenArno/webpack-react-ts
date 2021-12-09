/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 15:23:09
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 15:27:37
 */

const files = require.context('./modules', true, /\.ts$/);

const PemessRoutes = () => {
	return files
		.keys()
		.map((key) => {
			return files(key).default
		})
		.sort((a, b) => (a.id ? a.id - b.id : -1));
}
// 路由重组,所有的路由挂载在basicLayouts下面
const allRoutes = PemessRoutes();

export {
	allRoutes
}