import React from 'react';

import ReactDOM from 'react-dom';

//--- using jsx version-----hello.js

/*import Hello from './Components/Hello';

class App extends React.Component{
	render(){

		return(
			<div>
				<Hello/>
				<Hello />
			</div>
		);
	}
}
ReactDOM.render(<App />,document.getElementById('root'));*/


//------PROPS-----(props.js)

/*import Greet from './Components/props';

class App extends React.Component{
	render(){
		return (
<div>

<Greet name ="Bruce" age="12">

	<p> This is children props</p>
</Greet>

           
<Greet name ="Alice" age ="23">
 
 <button> Action</button>

 </Greet>
<Greet name ="Arjun"  age ="10"/>


 </div>


		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));	*/








//---- class component-----

/*import Welcome from './Components/Welcome' 
class Car extends React.Component{
	render(){
		return (
<div>
	<Welcome />
	</div>
		);
	}
}

ReactDOM.render(<Car />, document.getElementById('root'));	*/

//--- props in class component



  
// --- using function 


/* import Greet from './Components/Greet';
class App extends React.Component{
	render(){
		return (
<div>

<Greet/>


</div>


		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));	

*/

// --- using named export--- use the same name as Greet component

/*  import {Greet} from './Components/Greet';
class App extends React.Component{
	render(){
		return (
<div>

<Greet/>


</div>


		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));	

*/


// using a different name for greet component

 /*import AnyComponent from './Components/Greet';
class App extends React.Component{
	render(){
		return (
<div>

<AnyComponent/>


</div>


		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));*/


// using props in class component ------

/*import Greet from './Components/props';
import Welcome from './Components/Welcome';

class App extends React.Component{
	render(){
		return (
<div>

<Greet name ="Bruce" age="12">

	<p> This is children props</p>
</Greet>

           
<Greet name ="Alice" age ="23">
 
 <button> Action</button>

 </Greet>
<Greet name ="Arjun"  age ="10"/>


<Welcome name ="Athira" age ="24"/>
<Welcome name ="appu" age ="22"/>
<Welcome name ="Ammu" age ="19"/>



 </div>


		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));*/

// using state in classComponent ---state.js

/*import State from './Components/State';

class App extends React.Component{

	render(){
		return(
			<State />
		)
	}
}
ReactDOM.render(<App />,document.getElementById('root'));*/

// counter component. incrementing value by 1 Counter.js

/*import Counter from './Components/Counter';

class App extends React.Component{

	render(){
		return(
			<Counter />
		)
	}
}
ReactDOM.render(<App />,document.getElementById('root'));*/


/// props destructuring in functional component

/*import PropsDestructure from './Components/PropsDestructure';

class App extends React.Component{

	render(){
		return(
			<PropsDestructure name ="athira" age ="24" />
		)
	}
}
ReactDOM.render(<App />,document.getElementById('root'));*/

//eventhandler in functional component --- FunctionEventHandler.js

/*import FunctionEventHandler from './Components/FunctionEventHandler'

class App extends React.Component{

	render(){
		return(
			<FunctionEventHandler />
		)
	}
}
ReactDOM.render(<App />,document.getElementById('root'));*/



  //eventhandler in class component ---     ClassEventHandler.js


  import ClassEventHandler from './Components/ClassEventHandler'

class App extends React.Component{

	render(){
		return(
			<ClassEventHandler />
		)
	}
}
ReactDOM.render(<App />,document.getElementById('root'));
