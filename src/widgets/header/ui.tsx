import { Button, Image, Layout, Space } from 'antd'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { Logo } from '~src/shared/assets'
import { routes } from '~src/shared/routes'

import { useSticky } from './lib'
import styles from './styles.module.scss'

const actions = [
	{
		id: 'catalog' as const,
		label: 'About Us',
		url: routes.aboutUs(),
		disabled: false,
	},
	{
		id: 'orders' as const,
		label: 'Mentors',
		url: routes.mentors(),
		disabled: false,
	},
]

export function Header() {
	const { isSticky } = useSticky()

	return (
		<Layout.Header className={cn(styles.root, { [styles.sticky!]: isSticky })}>
			<Link className={styles.logo} to={routes.home()}>
				<img src={Logo} alt={'logo'} />
			</Link>
			<Navigation />
			<Space>
				<Link to={routes.signIn()}>
					<Button size='large' shape='round'>
						Sign In
					</Button>
				</Link>
				<Link to={routes.signUp()}>
					<Button size='large' type='primary' shape='round'>
						Sign Up
					</Button>
				</Link>
			</Space>
		</Layout.Header>
	)
}

function Navigation() {
	return (
		<div className={styles.nav}>
			{actions.map(({ id, label, disabled, url }) => (
				<Link
					key={label}
					to={url}
					className={cn(styles.item, {
						[styles.toolbarActionDisabled!]: disabled,
					})}
				>
					<span>{label}</span>
				</Link>
			))}
		</div>
	)
}
