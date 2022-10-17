//to see the difference b/w pure and regular components

import React from 'react';
import RegularComponent from './RegularComponent'
import PureCmp from './PureComponent'

class ParentComponent extends React.Component {

	constructor(){
		super()
		this.state ={name :'Athira'}
	}
	componentDidMount(){
		setInterval(()=>{
			this.setState(
				{name :'Athira'}
			)
		},2000)
	}
	render() {
		console.log('-------parent component render---------------')
		return (
			<div>
				ParentComponent
				<RegularComponent name ={this.state.name} />
				<PureCmp name ={this.state.name} />
			</div>
		);
	}
}

export default ParentComponent;