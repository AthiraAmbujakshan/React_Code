import React from 'react';

class ConditionRender extends React.Component{
	constructor(){
		super()
		this.state ={isLoggedIn :true}
	}

	render(){

		return this.state.isLoggedIn && <div>Welcome vishwas</div>
	}
}

export default ConditionRender