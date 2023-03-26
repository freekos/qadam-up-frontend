import { ConfigProvider, theme } from 'antd'
import { type ReactNode } from 'react'

export function withAntd(component: () => ReactNode) {
	const { defaultAlgorithm, darkAlgorithm } = theme

	return () => (
		<ConfigProvider
			theme={{
				algorithm: defaultAlgorithm,
				token: {
					colorPrimary: '#0084F0',
				},
			}}
		>
			{component()}
		</ConfigProvider>
	)
}
