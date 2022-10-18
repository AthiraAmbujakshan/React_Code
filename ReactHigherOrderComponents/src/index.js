import React from 'react';
import ReactDOM from 'react-dom';
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'

class App extends React.Component{

	render(){
		return(
			<div>
			<ClickCounter />
		<HoverCounter />
		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
