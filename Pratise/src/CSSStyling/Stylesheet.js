import React from 'react';
import './mystyle.css';


/* function Stylesheet(){
	return (
		<h1 className='primary'>Stylesheet</h1>
	)
}
export default Stylesheet */


//using props/states to the component 


/* function Stylesheet(props){
	let name = props.primary ? 'primary' :''
	return (
		<h1 className={name}>Stylesheet</h1>
	)
}
export default Stylesheet */


// multiple classes using template literals------



function Stylesheet(props){
	let name = props.primary ? 'primary' :''
	return (
		<h1 className={`${name} font-xl`}>Stylesheet</h1>
	)
}
export default Stylesheet

