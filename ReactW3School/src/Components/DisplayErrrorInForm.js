import React from 'react'


class DisplayErrorInForm extends React.Component{

	constructor(){
		super()
		this.state ={username:'',age:null, errorMessage:''}
	}

clickHandler=(event)=>{
	let nam = event.target.name
	let val = event.target.value
    let err =''
   if(nam ==='age')
   {
	   if(val !== "" && !Number(val)){
		   err = <strong>Your age must be a number</strong>;
      }
	   }

	   this.setState({errorMessage: err});
    this.setState({[nam]: val});
   }
	
submitHandler=(event)=>{
	alert(`${this.state.username} and ${this.state.age}`)
	event.preventDefault()
}

	render(){
		return(
			<form onSubmit ={this.submitHandler}>
				<p>User Name</p>
				<input type ="text" name ='username' onChange ={this.clickHandler} />
           <p>Age</p>
				<input type ="text" name ='age' onChange ={this.clickHandler} />
               {this.state.errorMessage}
 
				<div>
					<button>Submit</button>
				</div>
  
			</form>
		)
	}
}
export default DisplayErrorInForm