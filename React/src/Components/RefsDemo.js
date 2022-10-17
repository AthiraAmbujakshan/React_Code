import React, { Component } from 'react';

class RefsDemo extends Component {
// step 1-----creating refs in constructor
	constructor(){
		super()
			this.inputRef = React.createRef()
		
	}
	//step3 --calling the focus method on the input element
	componentDidMount(){
   this.inputRef.current.focus()
		console.log(this.inputRef)
	}

	clickhandler =()=>{
		alert(this.inputRef.current.value)
	}

//	step 2 ---attaching the refs to the input element in the render method	
	render() {
		return (
			<div>
 			
				<input type ='text' ref ={this.inputRef}/>
				<button onClick ={this.clickhandler}>Click!</button>
			</div>
		);
	}
}

export default RefsDemo;