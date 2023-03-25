import { withProvider } from '~src/app/providers'

import { Pages } from '~src/pages'

import './index.scss'

function App() {
	return (
		<>
			<Pages />
		</>
	)
}

export default withProvider(App)
