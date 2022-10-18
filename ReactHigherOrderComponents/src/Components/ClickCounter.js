import React, { Component } from 'react';

/* class ClickCounter extends Component {

	constructor() {
		super()
		this.state = { count: 0 }
	}

	incrementCount = () => {
		this.setState(prevstate => {
			return { count: prevstate.count + 1 }
		})
	}
	render() {
		const {count}= this.state
		return (
			<div>
			
				
				<button onClick={this.incrementCount}>Clicked {count} times</button>
				</div>
			
		);
	}
}

export default ClickCounter; */


// --------------------------------with HOC ---withCounter.js-------------------------

/* import UpdatedComponent from './withCounter'
 class ClickCounter extends Component {
constructor() {
		super()
		this.state = { count: 0 }
	}

	incrementCount = () => {
		this.setState(prevstate => {
			return { count: prevstate.count + 1 }
		})
	}
	
	render() {
		const {count}= this.state
		return (
			<div>
			
				
				<button onClick={this.incrementCount}>{this.props.name} Clicked {count} times</button>
				</div>
			
		);
	}
}

export default UpdatedComponent(ClickCounter); */



//using counter functionality  in hoc will elimates duplicates lines of code in both ClickCounter.js and HoverCounter.js



import UpdatedComponent from './withCounter'
 class ClickCounter extends Component {

	
	render() {
		const {count,incrementCount}= this.props
		return (
			<div>
			
				
				<button onClick={incrementCount}> Clicked {count} times</button>
				</div>
			
		);
	}
}

export default UpdatedComponent(ClickCounter);