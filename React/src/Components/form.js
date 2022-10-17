import React from 'react';

// using regular html--------


/* class Form extends React.Component{
	render(){

		return(
			<form>
				<div>
					<label>User Name</label>
					<input type ='text' />
				</div>
			</form>
		)
	}
}
export default Form ; */

//-----using react------


class Form extends React.Component{
	constructor(){
		super()
		this.state ={username:'',
		comments:'',
	topic :'react'}
	}
handleUsernamechange =(event)=>{
	this.setState(
		{username:event.target.value}
	)

}

handleCommentsChange=(event)=>{
	this.setState(
		{comments:event.target.value}
	)

	}
handleTopicChange=(event)=>{
this.setState(
	{topic:event.target.value}
)

}
handleSubmit= (event)=>{

	alert(`${this.state.username} ${this.state.comments} ${this.state.topic}` )
	event.preventDefault()
}

	render(){

		return(
			
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>UserName</label>
					<input type ='text'  value ={this.state.username}
					onChange ={this.handleUsernamechange}/>
				</div>

			
		<div>	
    <label>Comments</label>
	<textarea value ={this.state.comments} onChange={this.handleCommentsChange}/>
     </div>

	 <div>
		 <label>Topic</label>
		 <select value ={this.state.topic} onChange= {this.handleTopicChange} >
<option value='react'>React</option>
<option value ='angular'>Angular</option>
<option value='vue'>Vue</option>


		 </select>
		
	 </div>
	  <button type ="submit">Submit</button>
			</form>
		)
	}
}

export default Form ;