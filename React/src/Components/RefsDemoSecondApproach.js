import React, { Component } from 'react';

class RefsDemoSecondApproach extends Component {

	constructor(){
		super()
		this.cbref = null
	

	this.setCbref =(element)=>{
		this.cbref = element
	}
}
	componentDidMount(){
if(this.cbref){
	this.cbref.focus()
}
	}
	
	render() {
		return (
			<div>
				<input type ='text' ref ={this.setCbref}/>
			</div>
		);
	}
}

export default RefsDemoSecondApproach;