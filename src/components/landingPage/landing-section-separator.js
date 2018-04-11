import React, { Component } from 'react';

class LandingSectionSeparator extends Component {

	render() {
		return (
			<div className="landing-section-separator">
				<h1> {this.props.text} </h1>
			</div>
		)
	}
}

export default LandingSectionSeparator;