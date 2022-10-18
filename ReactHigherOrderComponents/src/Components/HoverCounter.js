import React, { Component } from 'react';

/* class HoverCounter extends Component {
	constructor(){
		super()
		this.state ={count:0}
	}

	incrementCount=()=>{
		this.setState(prevstate=>{
			return{count:prevstate.count+1}
		})
	}
	render() {
		const {count} =this.state
		return (
			<div>
				<h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
			</div>
		);
	}
}

export default HoverCounter; */

//--------------------using HOC  withCounter.js--------------------------------


/* import UpdatedComponent from './withCounter'
class HoverCounter extends Component {
	constructor(){
		super()
		this.state ={count:0}
	}

	incrementCount=()=>{
		this.setState(prevstate=>{
			return{count:prevstate.count+1}
		})
	}
	render() {
		const {count} =this.state
		return (
			<div>
				<h2 onMouseOver={this.incrementCount}>  {this.props.name}Hovered {count} times</h2>
			</div>
		);
	}
}

export default UpdatedComponent(HoverCounter); */



//using counter functionality  in hoc will elimates duplicates lines of code in both ClickCounter.js and HoverCounter.js



import UpdatedComponent from './withCounter'
class HoverCounter extends Component {
	
	render() {
		const {count,incrementCount} =this.props
		return (
			<div>
				<h2 onMouseOver={incrementCount}>  Hovered {count} times</h2>
			</div>
		);
	}
}

export default UpdatedComponent(HoverCounter);