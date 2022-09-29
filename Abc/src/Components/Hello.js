import React from 'react';

//----Using jsx----
/*const Hello =()=>{
	return(
		<div className ='dummyclass'>
			<h1> Hi Thiruvalla!</h1>
		</div>
	);
}
export default Hello;*/

//----without using jsx----

/*const Hello =()=>{
return React.createElement('div', null,React.createElement('h1', null, 'hello Thiruvalla'))
}
export default Hello;*/

//--- setting the 2nd parameter

const Hello =()=>{
	return React.createElement('div', {id:'HELLO',className:'dummyclass'}, React.createElement('h1',null,
	'hello Athira'))
}
export default Hello;