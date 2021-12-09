/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 13:50:02
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 15:04:25
 */
import React, { Suspense } from 'react';
import RoutesList from './RoutesList';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from '@/components/Loading'

interface RoutesProps {

}

const Routes: React.FC<RoutesProps> = (props) => {
	return <Suspense fallback={<Loading />}>
		<Router >
			<RoutesList />
		</Router>
	</Suspense>
}

export default Routes;