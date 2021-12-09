/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 16:57:19
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 16:57:19
 */
export interface ActionStoreState<T> {
	type: string
	value?: T
}
