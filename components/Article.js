import Head from 'next/head'
import { Typography, ButtonToolbar, Button, Card, Badge } from 'rsgui'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import { NextSeo } from 'next-seo';
import styles from '../styles/Home.module.css'

export default function BlogPost(props) {
	return (
		<>
			<NextSeo
				title={props.title}
				description={props.description}
				openGraph={{
					type: "website",
					title: props.title,
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
			<div className={styles.article}>
				<div className={styles["a-head"]}>
					<Typography type="h3">
						{props.title}
					</Typography>
					<Typography type="h5" style={{margin:0}}>
						{props.description}
					</Typography>
				</div>

				<div className={styles["a-body"]}>
					{props.children}
				</div>
			</div>
		</>
	)
}