import React from 'react';
import ReactDOM from 'react-dom';
import Database from './FCMComponents/Database'
//import {BrowserRouter, Switch,Route }  from 'react-router-dom'



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


function App(){
	
		return(
			<div>
<Database style={styles.select} options={options} />

</div>
		)
	}

ReactDOM.render(<App />, document.getElementById('root'));
