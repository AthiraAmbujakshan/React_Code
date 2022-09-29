import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component{

/* constructor(){
	super()
	this.state ={parentName:'parent'}
	this.greetParent = this.greetParent.bind(this)
}
greetParent(){

	alert(`Hello ${this.state.parentName}`)
	//alert('hello'+ this.state.parentName)
}


	render(){
		return(
			<div >
				<ChildComponent greethandler ={this.greetParent}/>
				</div>

		)
	}
}
export default ParentComponent */


// PASSing parameter in the pAREnt method and calling the method from child component 
 // we  use arrow functions...



 constructor(){
	super()
	this.state ={parentName:'parent'}
	this.greetParent = this.greetParent.bind(this)
}
greetParent(ChildName){

	alert(`Hello ${this.state.parentName} from ${ChildName}`)
	
}


	render(){
		return(
			<div >
				<ChildComponent greethandler ={this.greetParent}/>
				</div>

		)
	}
}
export default ParentComponent