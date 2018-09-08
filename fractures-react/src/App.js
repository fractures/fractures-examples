import React, { Component } from "react"

class App extends Component {
	render() {
		const emojis = [`🐀`, `🐛`, `🍅`, `🐞`, `🎱`, `🍃`]

		return (
			<div className="my-container flex flex-ycenter minh-viewport">
				<div className="grid grid-cols-3 grid-gap-2 w-100">
					{emojis.map((emoji, key) => (
						<div className="p-3 flex flex-center bg-smoke" key={ key }>
							{emoji}
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default App
