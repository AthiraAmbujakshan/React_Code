import React from 'react';

//functional component 

//-----1. destructuring in functional parameter

/*const PropsDestructure =({name, age})=>{

	return (
		<h1> my name is {name} and age is {age}</h1>
	)
}*/


//-----2. destructuring in function body

const PropsDestructure =(props)=>{
	const{name, age} = props

	return (
		<h1> my name is {name} and age is {age}</h1>
	)
	}



export default PropsDestructure