import React from 'react';
import LifecycleMountingChild from './LifecycleMountingChild';

class LifecycleMounting extends React.Component {

	constructor(props){
		super(props)
		this.state={name:'Athira'}

		console.log('lifecycle mounting constructor')
	}

	static  getDerivedStateFromProps(props,state){

		
		console.log('lifecycle mounting static  getDerivedStateFromProps')
		return null
	}

	componentDidMount(){
		console.log('lifecycle mounting ComponentDidMount')
	}
	
	render() {
		console.log('lifecycle mounting render')
		return (
			<div>
				Lifecycle mounting parent
				<LifecycleMountingChild />
			</div>
		)
	}
}

export default LifecycleMounting;
