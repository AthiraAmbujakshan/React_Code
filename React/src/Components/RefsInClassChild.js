import React, { Component } from 'react';

class RefsInClassChild extends Component {

	constructor(){
		super()
		this.classRef = React.createRef()
	}
	//----the below method is called from parent component-------
	focusInput(){ 
		this.classRef.current.focus()
	}
	render() {
		return (
			<div>
				<input type ='text' ref ={this.classRef}/>
			</div>
		);
	}
}

export default RefsInClassChild;