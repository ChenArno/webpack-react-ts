/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 16:50:03
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 17:03:55
 */

import { ActionStoreState } from '../connect'
import { COUNT } from '../actions/home'

const initState = {
	count: 1
}


export default function reducer(state = initState, action: ActionStoreState<any>) {
	switch (action.type) {
		case COUNT:
			return { ...state, count: action.value };
		default:
			return state;
	}
}