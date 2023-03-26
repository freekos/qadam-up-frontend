import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import cn from 'classnames'

import styles from './styles.module.scss'

interface SignUpFormProps {
	className?: string | CSSModuleClasses
}

export function SignUpForm(props: SignUpFormProps) {
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
				<Input.Password size='large' placeholder='Confirm Password' prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item>
				<Button type='primary' size='large' htmlType='submit' className={cn(styles.form_btn)}>
					Sign Up
				</Button>
			</Form.Item>
		</Form>
	)
}
