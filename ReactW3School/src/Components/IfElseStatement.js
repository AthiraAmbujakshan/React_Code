import React from 'react'

/* function IfElseStatement(){

	const x=5;
	let text ="GOODBYE";

	if(x<10){
		text ="Hello";
	}
return (
	<h1>
		{text}
	</h1>
)


}
export default IfElseStatement */

//using ternary operator---

function IfElseStatement(){

	const x=5;
	
return (
	<h1> {(x)<10 ? 'hello' :'Goodbye'}</h1>
)


}
export default IfElseStatement


