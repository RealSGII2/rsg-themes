import Head from 'next/head'
import { Typography } from 'rsgui'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import ProjectPage from '../../../components/ProjectPage'
import styles from '../../../styles/Home.module.css'

const title = "MEE6"
const description = "Projects about MEE6, including the EXP calculator."
const Scope = "/resource/mee6"
const Projects = [
	{
		name: "EXP Calculator",
		description: "Calculate how much EXP you need to get to a certain level.",
		to: `${Scope}/exp-calculator`
	}
]

export default function BlogPost() {
	return (
		<>
			<ProjectPage
				folder
				title={title}
				description={description}
				projects={Projects}
			/>
		</>
	)
}

export async function getStaticProps(context) {
	return {
	  props: {}, // will be passed to the page component as props
	}
  }