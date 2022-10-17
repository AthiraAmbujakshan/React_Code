import React, { Component } from 'react';
import ReactMemo from './ReactMemo';

class ReactMemoParent extends Component {

	constructor(){
		super()
		this.state ={name:'athira'}
	}

	componentDidMount(){
		setInterval(()=>{
			this.setState(
				{name :'AMBU'}
			)
		},2000)
	}
	render() {
		console.log('react memo parent rendering')
		return (
			<div>
				ReactMemoParent
				<ReactMemo name ={this.state.name} />
			</div>
		);
	}
}

export default ReactMemoParent;