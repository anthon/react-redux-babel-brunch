import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="app">
				App is mounted
				{this.props.children}
			</div>
		)
	}
}

export default App