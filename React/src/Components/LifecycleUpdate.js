import React from 'react';
import LifecycleUpdateChild from './LifecycleUpdateChild'

class LifecycleUpdate extends React.Component {

	 constructor(props){
		super(props)
		this.state={name:'Athira'}

		console.log('lifecycle mounting constructor')
	}
 
	static  getDerivedStateFromProps(props,state){

		
		console.log('lifecycle update static  getDerivedStateFromProps')
		return null
	}
	 shouldComponentUpdate(){
		console.log('lifecycle update shouldComponentUpdate')
		return true
	 }
	 getSnapshotBeforeUpdate(){
		
		console.log('lifecycle update   getSnapshotbeforeupdate')
		return null 
	 }

	componentDidUpdate(){
		console.log('lifecycle update ComponentDidUpdate')
	}

	changeState =()=>{
		this.setState(
			{name:'codeevolution'}
		)
	}
	
	render() {
		console.log('lifecycle update render')
		return (
			<div>
				Lifecycle update parent
				<button onClick={this.changeState}>changeState</button>
				<LifecycleUpdateChild />
			</div>
		)
	}
}

export default LifecycleUpdate;
