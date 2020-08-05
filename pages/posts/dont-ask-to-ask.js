import Head from 'next/head'
import { Typography } from 'rsgui'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
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
			<Article
				title={title}
				description={description}
			>
				<p>
					Consider this statement:
				</p>
				<pre>
					User1: i need help
				</pre>
				<p>
					You're stating you need help, but not your question. The other person can't help you if
					they don't know the problem. Most supporters on Discord take a look at the support channel every now and then, but
					if you don't state your problem they're most likely going to skip over your message and not respond to you. <br /><br />

					Instead, ask this:
				</p>
				<pre>
					User1: hello, ive... [question]
				</pre>
				<p>
					If you do this, you're not wasting time but you'll also get your response sooner.
				</p>
				<pre>
					User2: So... [answer]
				</pre>
				<p>
					A plus to asking your question in the same message is good for direct messaging. Let's say you state you have a problem 
					but not your question. If you leave before the other user comes back, they have to wait until <i>you</i> come back. <br />
					If you ask your question in the same message, the other user will be able to easily reply to you without waiting even a second.
				</p>
			</Article>
		</>
	)
}

export async function getStaticProps(context) {
	return {
	  props: {}, // will be passed to the page component as props
	}
  }