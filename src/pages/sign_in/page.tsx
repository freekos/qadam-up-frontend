import { Button, Layout, Typography } from 'antd'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { SignInForm } from '~src/features/sign_in_form'

import { Logo } from '~src/shared/assets'
import { routes } from '~src/shared/routes'

import styles from './styles.module.scss'

const formTitle = `Log in to your account`

export function SignInPage() {
	return (
		<Layout className={styles.root}>
			<Layout.Content className={styles.sign_in_section}>
				<div className={styles.image} />
				<div className={styles.sign_in_content}>
					<Link className={styles.logo} to={routes.landing()}>
						<img src={Logo} alt={'logo'} />
					</Link>
					<Typography.Title level={2} className={cn(styles.title)}>
						{formTitle}
					</Typography.Title>
					<div className={styles.form_wrapper}>
						<SignInForm />
						<div className={styles.btn_wrapper}>
							<Link to={routes.signUp()}>
								<Button type='link'>Sign Up</Button>
							</Link>
							<Button type='link'>Forgot Password</Button>
						</div>
					</div>
				</div>
			</Layout.Content>
		</Layout>
	)
}
