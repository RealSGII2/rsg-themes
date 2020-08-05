import Head from 'next/head'
import { Typography, ButtonToolbar, Button, Card, Badge } from 'rsgui'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import styles from '../styles/Home.module.css'
import { withRouter } from 'next/router';
import Link from 'next/link';

const Pages = [
	{
		img: "",
		name: "Don't ask to ask, just ask.",
		description: "The worst possible thing you can do is ask to ask. Why not just ask your question instead?",
		to: "/posts/dont-ask-to-ask"
	}
]

export default withRouter(function Home({ router }) {
	return (
		<>
			<Head>
				<title>RSG Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<div className={styles.container}>
				<Typography type="h2">
					Home
				</Typography>

				{Pages.map(p => {
					const attr = {}

					if (p.img !== "") attr.img = <img src={p.img} />

					return (
						<Link href={p.to}>
							<Card elevated onClick={() => {}} style={{borderRadius:8,marginBottom:32}} title={p.name} {...attr}>
								<p>
									{p.description}
								</p>
							</Card>
						</Link>
					)
				})}
			</div>
		</>
	)
})
