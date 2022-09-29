import React from 'react';

/* function ChildComponent(props){
return(
	<div>

	<button onClick ={props.greethandler}>GreetParent!</button>	
	</div>
)

}
export default ChildComponent */

// PASSing parameter in the pAREnt method and calling the method from child component 
 // we  use arrow functions...



 function ChildComponent(props){
return(
	<div>

	<button onClick ={()=> props.greethandler('child')}>GreetParent!</button>	
	</div>
)

}
export default ChildComponent 
