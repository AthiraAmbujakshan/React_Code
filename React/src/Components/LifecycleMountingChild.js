import React from 'react';


class LifecycleMountingChild extends React.Component {

	constructor(props){
		super(props)
		this.state={name:'Athira'}

		console.log('lifecycle mounting child constructor')
	}

	static  getDerivedStateFromProps(props,state){

		
		console.log('lifecycle mounting child static  getDerivedStateFromProps')
		return null
	}

	componentDidMount(){
		console.log('lifecycle mounting child ComponentDidMount')
	}
	
	render() {
		console.log('lifecycle mounting child render')
		return (
			<div>
				
				Lifecycle mounting child
			</div>
		)
	}
}

export default LifecycleMountingChild;
