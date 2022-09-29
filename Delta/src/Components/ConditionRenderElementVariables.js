   
import React from 'react';



  class  ConditionRenderElementVariables extends React.Component{
constructor(){
	super()
	this.state ={isLoggedIn:true}
}

	render(){

		let message

		if(this.state.isLoggedIn)
		{
			message =<div>Welcome Vishwas</div>
		}
		else 
		{
			message =<div>Welcome Guest</div>
		}
		return <div>{message}</div>
	}
  }
  export default ConditionRenderElementVariables