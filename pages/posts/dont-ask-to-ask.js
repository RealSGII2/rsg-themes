import Head from 'next/head'
import { Typography } from 'rsgui'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import { NextSeo } from 'next-seo';
import Article from '../../components/Article'
import styles from '../../styles/Home.module.css'

const title = "Don't ask to ask, just ask."
const description = "The worst possible thing you can do is ask to ask. Why not just ask your question instead?"

/* <Head>
				<title>{title}</title>
				<meta property="og:type" content="website" />
				<meta name="theme-color" content="#5093ad" />
				<meta name="og:description" content={description} />
				<meta property='og:title'  content={title} />
				<meta property='og:site_name' content='RealSGII2' />
				<link rel="icon" href="/favicon.ico" />
			</Head> */

export default function BlogPost() {
	return (
		<>
			<NextSeo
				title={title}
				description={description}
				openGraph={{
					type: "website",
					title,
					description,
					site_name: "RealSGII2"
				}}
				additionalMetaTags={[
					{
						property: 'theme-color',
						content: '#5093ad'
					}
				]}
			/>
			<Article
				title={title}
				description={description}
			>
				<Typography type="body1">
					Hi
				</Typography>
			</Article>
		</>
	)
}

export async function getStaticProps(context) {
	return {
	  props: {}, // will be passed to the page component as props
	}
  }