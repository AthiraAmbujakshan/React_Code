import React from 'react'

class MultipleForm extends React.Component{

constructor (){
	super()
	this.state =
	{username :'',
		age :null
	}
}

changeHandler =(event)=>{
	let val= event.target.value
	let nam = event.target.name

	 if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    } 
	this.setState(
	 {[nam]: val}

	
	)
}

submitHandler=(event)=>{

	alert(`${this.state.username} ${this.state.age}`)
	event.preventDefault()
	
	
	
}



	render(){
		return(

			<form onSubmit ={this.submitHandler}>
				<h1>Hello {this.state.username} {this.state.age}</h1>
				<p>UserName</p>
				<input type ="text"
				name ='username'
				 onChange ={this.changeHandler} />

				 <p>Age</p>

				 <input type ="text"
				name ='age'
				 onChange ={this.changeHandler} />

				 <div>
					 <button>Submit</button>
				 </div>

				</form>
		)
	}
}
export default MultipleForm