import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login'
import Database from './Components/Database'
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'


const styles = {

	select: {
		width: '100%',
		margin: '0px',
		padding: '8px',
		border: 0


	}

}
const options = [
	{ label: 'Oracle', value: 'oracle' },
	{ label: 'MySQL', value: 'mysql' },
	{ label: 'PostgreSQL', value: 'postgresql' },
	{ label: 'DB2', value: 'db2' }

]



class App extends React.Component{

	render(){
		return(
			<BrowserRouter>
				<Header />

				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path='/validate' >

						<Database style={styles.select} options={options} />
					</Route>

				</Switch>
				<Footer />
			</BrowserRouter> 

		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
