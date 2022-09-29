import React from 'react';

class ConditionRenderifelse extends React.Component{
constructor(){
	super()
	this.state ={isLoggedin :true}
}

	render(){

		if(this.state.isLoggedin)
		{
		return (
			

				<div>Welcome Vishwas</div>
					


			
		)
	}
	else {
		return (
			

				<div>Welcome Guest</div>
					


			
		)
	}
}
}

export default ConditionRenderifelse