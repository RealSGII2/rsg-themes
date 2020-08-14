import { Appbar, Divider, Layout, List } from 'rsgui'
import Link from '../components/BetterLink'
import '../styles/globals.css'
import 'rsgui/dist/index.css'
import 'react-flexbox-grid/dist/react-flexbox-grid.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Appbar title="RealSGII2 Themes" />
			<Layout>
				<Layout.Content>
					<Component {...pageProps} />
				</Layout.Content>
			</Layout>
		</>
	)
}

export default MyApp
