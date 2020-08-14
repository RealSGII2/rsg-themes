import Head from 'next/head'
import { Typography, ButtonToolbar, Button, Card, Badge } from 'rsgui'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import { NextSeo } from 'next-seo';
import { withRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import Link from '../components/BetterLink'
import { route } from 'next/dist/next-server/server/router';

export default withRouter(function BlogPost(props) {
	if (props.folder) return (
		<>
			<NextSeo
				title={`${props.title} Projects`}
				description={props.description}
				openGraph={{
					type: "website",
					title: `${props.title} Projects`,
					description: props.description,
					site_name: "RealSGII2"
				}}
				additionalMetaTags={[
					{
						property: 'theme-color',
						content: '#5093ad'
					}
				]}
			/>
			<div className={styles.container}>
				<Button look="outlined" onClick={() => props.router.push("/")}>
					Back
				</Button>
				<Typography type="h3">
					{props.title}
				</Typography>
				<Typography type="h5">
					{props.description}
				</Typography>

				<div>
					{props.projects.sort((a, b) => {
						if (a.date > b.date) {
							return -1;
						}
						if (b.date > a.date) {
							return 1;
						}
						return 0;
					}).map(p => {
						const attr = {}

						if (p.img !== "" && p.img !== undefined) attr.img = <img src={p.img} />

						return (
							<Link href={p.to}>
								<Card onClick={() => { }} style={{ borderRadius: 8, marginBottom: 32 }} title={p.name} {...attr}>
									<p>
										{p.description}
									</p>
								</Card>
							</Link>
						)
					})}
				</div>
			</div>
		</>
	)

	return (
		<>

		</>
	)
})
