import { Route, Routes } from 'react-router'

import { lazy } from '~src/shared/lib'
import { paths, routes } from '~src/shared/routes'

const LandingPage = lazy(() => import('./landing'), 'LandingPage')
const HomePage = lazy(() => import('./home'), 'HomePage')
const Error404Page = lazy(() => import('./error-404'), 'Error404Page')

export function Pages() {
	return (
		<Routes>
			<Route path={paths.landing} element={<LandingPage />} />
			<Route path={paths.home} element={<HomePage />} />
			<Route path='*' element={<Error404Page />} />
		</Routes>
	)
}
