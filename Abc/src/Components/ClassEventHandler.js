import React from 'react';

class ClassEventHandler extends React.Component{

	classHandler(){

		console.log("button clicked")
	}

	render(){

		return(

			<div>

				<button onClick={this.classHandler}>CLASS CLICK BUTTON</button>
			</div>
		)
	}
}

export default ClassEventHandler
