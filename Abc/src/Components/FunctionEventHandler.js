import React from 'react';

function FunctionEventHandler(){

	function clickHander(){

		console.log('button clicked')
	}

	return(

		<div>

   <button onClick={clickHander}>Click ME</button>

		</div>
	)
}
export default FunctionEventHandler