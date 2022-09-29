import React from 'react';


class EventBind extends React.Component{
// Approach1-------using bind keyword in render method----------------


/* constructor(){
	super()
	this.state={message:'Hello'}
}
clickHander(){
this.setState({
	message:'GoodBye!'
})
 console.log(this)
}



	render(){

		return (
			<div>
				<div>{this.state.message}</div>

			
				<button onClick ={this.clickHander.bind(this)}>CLICK!</button>
			</div>
		)
	}
	
}
export default EventBind */

// Approach2-------using arrow function  in render method----------------

/* constructor(){
	super()
	this.state={message:'Hello'}
}
clickHander(){
this.setState({
	message:'GoodBye!'
})
 console.log(this)
}



	render(){

		return (
			<div>
				<div>{this.state.message}</div>

			
				<button onClick ={()=>this.clickHander()}>CLICK!</button>
			</div>
		)
	}
	
}
export default EventBind */


// Approach3-------binding the event handler in the constructor----------------


/* constructor(){
	super()
	this.state={message:'Hello'}

	this.clickHander= this.clickHander.bind(this)
}
clickHander(){
this.setState({
	message:'GoodBye!'
})
 console.log(this)
}



	render(){

		return (
			<div>
				<div>{this.state.message}</div>

			
				<button onClick ={this.clickHander}>CLICK!</button>
			</div>
		)
	}
	
}
export default EventBind  */



// Approach4------using ARROW function as a class property----------------



constructor(){
	super()
	this.state={message:'Hello'}

	
}
clickHander =()=>{
	this.setState({
		message:'GoodBye!'
	})
}



	render(){

		return (
			<div>
				<div>{this.state.message}</div>

			
				<button onClick ={this.clickHander}>CLICK!</button>
			</div>
		)
	}
	
}
export default EventBind 
