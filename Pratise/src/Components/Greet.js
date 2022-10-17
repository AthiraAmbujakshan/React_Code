import React from 'react';

class Greet extends React.Component{
	constructor(){
		super()
		this.state ={message:'Hello'}
		
	}

clickHander =()=>{

	this.setState(
{message: 'GoodBye'}
	)
	console.log(this)
}


	render(){


		 return(
			 <div>
				 <div>{this.state.message}</div>
				 <button onClick ={this.clickHander}> ONCLICK!</button>
			 </div>
		 )
		 
		}

}	

	
export default Greet

