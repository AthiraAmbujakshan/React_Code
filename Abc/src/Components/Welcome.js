import React from 'react';

class Welcome extends React.Component{
	render(){

		// destructing state

	/*	const{name, age} = this.props
		return(

		//<h1> Hello Athira Ambujakshan!</h1>
		//using props 
		<h1> Welcome {name} and {age}</h1>	
		);
	}

}
export default Welcome */


// using props in classcomponent without destructuring

		return(

		//<h1> Hello Athira Ambujakshan!</h1>
		//using props 
		<h1> Welcome {this.props.name} and {this.props.age}</h1>	
		);
	}

}
export default Welcome


