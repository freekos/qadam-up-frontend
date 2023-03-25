import  {type ReactNode } from "react"



export function withRouter(component: () => ReactNode) {
	return () => {
		return (
			<>{component()}</>
		)
	}
}
