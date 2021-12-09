/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 16:45:26
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 16:53:51
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;