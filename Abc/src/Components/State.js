import React from 'react';

class State extends React.Component{


constructor(){
	super()
	this.state={message :'welcome visitor'}
}
changeMessage(){
	this.setState({

		message:'Thank you for Subcribing'
	})
}

render(){
	return (
	<div>
     <h1>{this.state.message}</h1>
	 <button onClick={()=>this.changeMessage()}>Subcribe</button>
	</div>
	)
}

}
export default State;