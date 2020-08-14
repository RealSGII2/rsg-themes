import Head from 'next/head'
import { Typography, ButtonToolbar, Button, Card, Badge } from 'rsgui'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import styles from '../styles/Home.module.css'
import { withRouter } from 'next/router';
import Link from '../components/BetterLink'

const Scope = "/theme"
const _Projects = [
	{
		img: "",
		name: "MEE6",
		description: "Projects about MEE6, including the EXP calculator.",
		to: `${Scope}/mee6`
	}
]

export default withRouter(function Home({ router, Projects }) {
	return (
		<>
			<Head>
				<title>RSG Resources</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.container}>
				<Typography type="h2">
					Themes
				</Typography>
				{Projects.sort((a, b) => {
					if (a.name > b.name) {
						return -1;
					}
					if (b.name > a.name) {
						return 1;
					}
					return 0;
				}).map(p => {
					const attr = {}

					if (p.img !== "") attr.img = <img src={p.img} />

					return (
						<Card style={{ borderRadius: 8, marginBottom: 32 }} title={p.name} {...attr}
							actions={[
								{
									label: "Preview",
									look: "text",
									onClick() {
										window.location.href = `${p.url}/view`
									}
								},
								{
									label: "Use",
									onClick() {
										window.location.href = `${p.url}/copy`
									}
								}
							]}
						>
							<p>
								{p.description}
							</p>
						</Card>
					)
				})}
			</div>
		</>
	)
})

export const getServerSideProps = async (ctx) => {
	let data = []

	const res = await fetch('http://themes.realsgii2.dev/api/themes')
	console.log(res.body)
	const _data = await res.json()
	data = _data.data

	console.log(data)

	return {
		props: {
			Projects: data
		}
	}
}
