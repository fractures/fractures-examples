import React, { Component } from "react"

class App extends Component {
	render() {
		return (
			<div className="my-container flex flex-ycenter minvh-100">
				<div className="grid grid-cols-3 grid-gap-1 w-100">
					<div className="p-1 bg-smoke">🐀</div>
					<div className="p-1 bg-smoke">🐛</div>
					<div className="p-1 bg-smoke">🍅</div>
					<div className="p-1 bg-smoke">🐞</div>
					<div className="p-1 bg-smoke">🎱</div>
					<div className="p-1 bg-smoke">🍃</div>
				</div>
			</div>
		)
	}
}

export default App
