import { useEffect, useState } from 'react'

const STICKY_LIMIT = 30

export function useSticky() {
	const [isSticky, setSticky] = useState<boolean>(false)

	function handleScroll() {
		setSticky(window.scrollY >= STICKY_LIMIT)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', () => handleScroll)
		}
	}, [])

	return { isSticky }
}
