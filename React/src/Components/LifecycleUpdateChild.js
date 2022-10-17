import React from 'react';


class LifecycleUpdateChild extends React.Component {

	 constructor(props){
		super(props)
		this.state={name:'Athira'}

		console.log('lifecycle mounting constructor')
	}
 
	static  getDerivedStateFromProps(){

		
		console.log('lifecycle update child static  getDerivedStateFromProps')
		return null
	}
	 shouldComponentUpdate(){
		console.log('lifecycle update child shouldComponentUpdate')
		return true
	 }
	 getSnapshotBeforeUpdate(){
		
		console.log('lifecycle update child  getSnapshotbeforeupdate')
		return null 
	 }

	componentDidUpdate(){
		console.log('lifecycle update child ComponentDidUpdate')
	}

	
	
	render() {
		console.log('lifecycle update child render')
		return (
			<div>
				Lifecycle update child
				
			</div>
		)
	}
}

export default LifecycleUpdateChild;
