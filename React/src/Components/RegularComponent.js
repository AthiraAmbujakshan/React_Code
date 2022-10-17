//to see the difference b/w pure and regular components

import React, { Component } from 'react';

class RegularComponent extends Component {
	render() {
		console.log('*******regular component render***********')
		return (
			<div>
				RegularComponent {this.props.name}
			</div>
		);
	}
}

export default RegularComponent;