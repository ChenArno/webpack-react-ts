/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 13:50:02
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-09 09:46:26
 */
import React, { Suspense } from 'react';
import RoutesList from './RoutesList';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from '@/components/Loading'

const { REACT_APP_HOMEPAGE } = process.env

interface RoutesProps {

}

const Routes: React.FC<RoutesProps> = (props) => {
	return <Suspense fallback={<Loading />}>
		<Router basename={REACT_APP_HOMEPAGE}>
			<RoutesList />
		</Router>
	</Suspense>
}

export default Routes;