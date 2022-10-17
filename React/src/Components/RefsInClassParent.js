import React, { Component } from 'react';
import RefsInClassChild from './RefsInClassChild'


class RefsInClassParent extends Component {
	constructor(){
		super()
		this.componentRef = React.createRef()
	}

	clickhandler =()=>{
		this.componentRef.current.focusInput()
	}
	render() {
		return (
			<div>
				<RefsInClassChild  ref ={this.componentRef}/>
				<button onClick ={this.clickhandler}>FOCUS</button>

			</div>
		);
	}
}

export default RefsInClassParent;