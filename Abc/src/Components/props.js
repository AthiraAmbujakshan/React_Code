import React from 'react';

const Greet= (props)=>{
	

	return(
 <div>
		<h1> Hello  my name is {props.name} and age is  {props.age}</h1>
 
		{props.children}   
	
		</div>
	);
}
export default Greet