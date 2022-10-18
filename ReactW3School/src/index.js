import React from 'react';
import ReactDOM from 'react-dom';
//import  IfElseStatement from './Components/IfElseStatement'
//import FormHeader from './Components/FormHeader'

//import MultipleForm from './Components/MultipleForm'
//import DisplayErrorInForm from './Components/DisplayErrrorInForm'
import CustomSelect from './Components/Select'


const styles={

	select:{
		width:'100%',
		maxWidth:600
	}
}

class App extends React.Component{

  

	render(){
		return(
			//<div> <IfElseStatement /></div>
			//<div> <FormHeader /></div>
		//	<div> <MultipleForm /></div>
			//<div> <DisplayErrorInForm /></div>
       <div><CustomSelect  style={styles.select} label="choose database"/></div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
