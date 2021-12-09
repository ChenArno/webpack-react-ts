/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 16:52:34
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 17:17:04
 */
import { combineReducers, Reducer } from 'redux';
import home from './home';

const reducers: Reducer = combineReducers({ home });
export default reducers;