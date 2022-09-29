import  React from 'react';


class Counter extends React.Component{


	constructor(){
		super()
			this.state ={count:0}
		}
	
	increment(){
		/* we tried to change state value directly , 
		but it is not advised as U1 doesnot render the value even though console shows 
		incremented value. so always use setState method*/
//this.state.count = this.state.count +1
//console.log(this.state.count)



// here UI is incremented to1, but console is 0 . this is because,console.log(this.state.count)
//is called before the state is actually set .
/*this.setState(
		{
			count : this.state.count+1
		}
	)
	console.log(this.state.count)*/


// to handle the above, we use 2 parameters for setState method

 /*this.setState(
	 {
		 count :this.state.count+1 
		},
		 ()=>{
			 console.log('Callback value', this.state.count)
			}
	 
 )
   console.log(this.state.count)
	}

	render(){
		return (
			<div>

			<div> count-{this.state.count} </div>
			<button onClick ={()=>this.increment()}> Increment</button>
			</div>
		);
	}
}*/

///---------------------------SCENARO3 
/* WHENEVER YOU HAVE TO UPDATE THE STATE BASED BASED ON THE PREVIOS STATE,
 YOU NEED TO HAVE FUNCTION AS AN ARGUMENT TO SET STATE METHOD 
 INSTEAD OF PASSING A REGULAR OBJECT*/



this.setState(prevState =>({
count:prevState.count +1

}))
	 
   console.log(this.state.count)
	}




incrementFive(){
	this.increment()
	this.increment()
	this.increment()
	this.increment()
	this.increment()
}



render(){
		return (
			<div>

			<div> count-{this.state.count} </div>
			<button onClick ={()=>this.incrementFive()}> Increment</button>
			</div>
		);
	}
}









export default Counter;