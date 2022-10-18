import React from 'react';
import ReactDOM from 'react-dom';


class Car extends React.Component{
constructor(){
super();
this.state = {color:"red"};
this.state ={model:"benz"}

}
render(){
	return <h2> i am a {this.state.model} car!</h2>
}
}


	
	
	

ReactDOM.render(<Car />, document.getElementById('root'));
