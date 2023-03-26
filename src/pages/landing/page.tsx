import { Button, Layout, Typography } from 'antd'
import cn from 'classnames'

import { Header } from '~src/widgets/header'

import styles from './styles.module.scss'

const heroTitle = `Welcome to QadamUp`
const heroText = `This website offers a comprehensive platform for individuals who aspire to achieve professional excellence in their respective fields. Whether you're starting out in your career or looking to advance to the next level, we provide the resources and tools necessary to help you succeed.`

export function LandingPage() {
	return (
		<Layout className={styles.root}>
			<Header />
			<HeroSection />
		</Layout>
	)
}

function HeroSection() {
	return (
		<Layout.Content className={styles.hero_section}>
			<div className={styles.hero_content}>
				<div className={styles.hero_text_container}>
					<Typography.Title className={cn(styles.title)}>{heroTitle}</Typography.Title>
					<Typography className={cn(styles.text)}>{heroText}</Typography>
				</div>
				<Button type='primary' size='large' shape='round' className={cn(styles.hero_btn)}>
					GETTING STARTED
				</Button>
			</div>
			<div className={styles.hero_image} />
		</Layout.Content>
	)
}
