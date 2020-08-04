import Head from 'next/head'
import { Typography, ButtonToolbar, Button, Card, Badge } from 'rsgui'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>r</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.hero}>
				<Typography type="h1">
					r
				</Typography>
				<Typography type="h5">
					r
				</Typography>
				<ButtonToolbar>
					<Button look="inverted">
						r
					</Button>
					<Button color="light" look="outlined">
						r
					</Button>
				</ButtonToolbar>
			</div>
			
			<div class={styles.gridc}>
				<Grid fluid>
					<Row>
						<Col xs={12} sm={6} md={4} lg={3}>
							<Card title="r" bordered actions={[{label: "r"}]}>
								<div style={{marginBottom: 10}}>
									<Badge color="gray" look="ghost">
										r
									</Badge>
								</div>
								r
							</Card>
						</Col>
					</Row>
				</Grid>
			</div>
		</div>
	)
}
