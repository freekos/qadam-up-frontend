import { Route, Routes } from 'react-router'

import { paths, routes } from '~src/shared/routes'

// const LandingPage =

export function Pages() {
	return (
		<Routes>
			<Route path={paths.landing} element={<LandingPage />} />
		</Routes>
	)
}
