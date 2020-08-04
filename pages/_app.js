import { Appbar, Divider, Layout, List } from 'rsgui'
import Link from '../components/BetterLink'
import '../styles/globals.css'
import 'rsgui/dist/index.css'
import 'react-flexbox-grid/dist/react-flexbox-grid.css'

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
	return (
		<div>
			<Appbar title="r" />
			<Layout drawerOpen simple>
				<Layout.Drawer>
					<List look="rounded">
						{Nav.map(n => {
							if (n.type == "divider") return (
								<Divider key={n} />
							);
							if (n.type == "label") return (
								<List.Label key={n}>
									{n.text}
								</List.Label>
							);
							if (n.type == "ext-link") return (
								<a href={n.to} key={n}>
									<List.Item>
										{n.text}
									</List.Item>
								</a>
							);
							return (
								<Link key={n} href={n.to} activeClassName="active">
									<List.Item>
										{n.text}
									</List.Item>
								</Link>
							)
						})}
					</List>
				</Layout.Drawer>
				<Layout.Content>
					<Component {...pageProps} />
				</Layout.Content>
			</Layout>
		</div>
  	)
}

export default MyApp
