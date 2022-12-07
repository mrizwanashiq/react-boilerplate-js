import React from "react"

const DummyComponent = () => {
	const [isLoading, setIsLoading] = React.useState(true)
	const [loading, setLoading] = React.useState(true)
	const content = {

		// Navigation menu
		links: [
			{
				text: "Home",
				path: "/",
			},
			{
				text: "About",
				path: "/about",
			},
			{
				text: "Careers",
				path: "/careers",
			},
			{
				text: "Services",
				path: "/#services",
			},
			{
				text: "Clients",
				path: "/#clients",
			},
			{
				text: "Contact Us",
				path: "/contact",
			},
			{
				text: "Contact Us",
				path: "/contact",
			},
			{
				text: "Contact Us",
				path: "/contact",
			},
			{
				text: "Contact Us",
				path: "/contact",
			},
			{
				text: "Contact Us",
				path: "/contact",
			},
			{
				text: "Contact Us",
				path: "/contact",
			},
			{
				text: "Contact Us",
				path: "/contact",
			},
		],
	}
	return (
		<div style={{display:"flex", justifyContent:"space-around"}}>
			{/*{content.links.map(link => (*/}
			{/*	<div>*/}
			{/*		<a href={link.path}>*/}
			{/*			<span>{link.text}</span>*/}
			{/*		</a>*/}
			{/*	</div>*/}
			{/*))}*/}
			<text>{isLoading ? "Loading" : "Loaded"}</text>
			<text>{loading ? "Loading" : "Loaded"}</text>
			<button onClick={() => {
				setLoading(!loading)
				setIsLoading(!isLoading)

			}}>Toggle</button>

		</div>
	)
}

export default DummyComponent
