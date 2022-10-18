import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar'
import {BrowserRouter, Switch,Route }  from 'react-router-dom'

function App(){
	
		return(
			<>
<BrowserRouter>
<NavBar />
<Switch>
	<Route></Route>
</Switch>
</BrowserRouter>
</>
		)
	}

ReactDOM.render(<App />, document.getElementById('root'));
