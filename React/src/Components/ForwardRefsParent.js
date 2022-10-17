import React from 'react'
import ForwardRefsChild from './ForwardRefsChild'

class ForwardRefsParent extends React.Component{
	constructor(){
		super()
		this.frwdRefParent = React.createRef()
	}


	clickHandler =()=>{
		this.frwdRefParent.current.focus()
	}
	
	render(){
		return(
			<div>
          <ForwardRefsChild  ref ={this.frwdRefParent}/>
		  <button onClick ={this.clickHandler}>Focus</button>
			</div>
		)
	}
}

export default ForwardRefsParent