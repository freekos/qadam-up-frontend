import { Button, Layout, Typography } from 'antd'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { SignUpForm } from '~src/features/sign_up_form'

import { Logo } from '~src/shared/assets'
import { routes } from '~src/shared/routes'

import styles from './styles.module.scss'

const formTitle = `Create an account`

export function SignUpPage() {
	return (
		<Layout className={styles.root}>
			<Layout.Content className={styles.sign_up_section}>
				<div className={styles.image} />
				<div className={styles.sign_up_content}>
					<Link className={styles.logo} to={routes.landing()}>
						<img src={Logo} alt={'logo'} />
					</Link>
					<Typography.Title level={2} className={cn(styles.title)}>
						{formTitle}
					</Typography.Title>
					<div className={styles.form_wrapper}>
						<SignUpForm />
						<Link to={routes.signIn()}>
							<Button type='link'>Sign In</Button>
						</Link>
					</div>
				</div>
			</Layout.Content>
		</Layout>
	)
}
