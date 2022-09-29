import React from 'react';

class Ternary extends  React.Component{
//benefit ----- can be used inside jsx------ 

	constructor(){
		super()
		this.state={IsloggedIn :true}
	}

	render(){
  return(
		this.state.IsloggedIn ?
		<div> Welcome Vishwas</div> :
		<div> Welcome Guest</div>
  )

	}
}
export default Ternary