import { Links, LiveReload, Meta, Outlet } from '@remix-run/react'
import type { LinksFunction, MetaFunction } from '@remix-run/server-runtime'

import styles from './styles/app.css'

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Is Tailwind CSS the most downloaded CSS framework?',
	viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function App() {
	return (
		<html
			lang="en"
			className="h-full"
		>
			<head>
				<Meta />
				<Links />
			</head>
			<body className="h-full">
				<Outlet />
				<LiveReload />
			</body>
		</html>
	)
}
