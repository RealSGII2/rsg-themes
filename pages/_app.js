import { Appbar, Divider, Layout, List } from 'rsgui'
import Link from '../components/BetterLink'
import '../styles/globals.css'
import 'rsgui/dist/index.css'
import 'react-flexbox-grid/dist/react-flexbox-grid.css'

// for fun
const Nav = [
	{
		type: "link",
		text: "r",
		to: "/"
	},
	{ type: "divider" },
	{
		type: "label",
		text: "r"
	},
	{
		type: "ext-link",
		text: "r",
		to: "https://git.realsgii2.dev/"
	}
]

function MyApp({ Component, pageProps }) {
	const [isOpen, setOpen] = React.useState(true)

	return (
		<div>
			<Component {...pageProps} />
		</div>
  	)
}

export default MyApp
