import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import * as dom from './dom'

export const useResetScrollAtEveryPage = () => {
	const location = useLocation()
	const prev = useRef<string>()

	useEffect(() => {
		if (prev.current !== location.pathname) {
			dom.scrollToTop()
		}

		prev.current = location.pathname
	}, [location])
}
