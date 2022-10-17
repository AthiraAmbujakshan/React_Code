import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header'; //Include Heder
//import Footer from './Components/Footer'; //Include Footer


class App extends React.Component {
  
  render() {
    return (
		<div>

			<Header/>
			<h1> hello</h1>
			</div>
			
	)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));







