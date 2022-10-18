//displays the header only if username is displayed


import React from 'react';

class FormHeader extends React.Component {
constructor(){
	super()
	this.state ={username :''}
}
   changeHandler=(event)=>{
	   this.setState(
   
   {username:event.target.value}
	   )}

	render(){
     
		return(

    
     <form>
        <h1>HELLO {this.state.username}</h1>
	   <input type ="text" value ={this.state.username} 
	   onChange ={this.changeHandler}   />
   </form>

		)
	}

}
export default FormHeader