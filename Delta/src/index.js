import React from 'react';
import ReactDOM from 'react-dom';

//import EventBind from './Components/EventBind';
//import ParentComponent from './Components/ParentComponent';
//import ConditionRenderifelse from './Components/ConditionRenderifelse';
 //import ConditionRenderElementVariables from './Components/ConditionRenderElementVariables';
 //import Ternary from './Components/ConditionRenderTernaryOperator';
 //import ConditionRender from './Components/ConditionRendershortCircuitapproach';
 //import NamesList from './Components/ListRender';
 //import PersonNames from './Components/listObject';
 // import NamesList from './Components/listObjectKeyConcepts';
 
        

 class App extends React.Component{

	render(){

		return(
		  //	<div><EventBind /> </div>
		//<div><ParentComponent /></div>
		//<div><ConditionRenderifelse /></div>
		//<div><ConditionRenderElementVariables /></div>
		//<div> <Ternary /></div>
		//<div> <ConditionRender /></div>
		//<div> <NamesList /></div> 

		   //<div> <PersonNames /></div>  
		   <div><NamesList /></div> 
		  
	 
	   
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root')); 


