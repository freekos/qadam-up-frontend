import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import cn from 'classnames'

import styles from './styles.module.scss'

interface SignInFormProps {
	className?: string | CSSModuleClasses
}

export function SignInForm(props: SignInFormProps) {
	const { className } = props

	return (
		<Form className={cn(styles.root, className)}>
			<Form.Item>
				<Input size='large' placeholder='Email' prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item>
				<Input.Password size='large' placeholder='Password' prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item>
				<Button htmlType='submit' type='primary' size='large' className={cn(styles.form_btn)}>
					Sign In
				</Button>
			</Form.Item>
		</Form>
	)
}
