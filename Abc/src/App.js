import React from 'react';
import ReactDOM  from 'react-dom';
import Welcome from '/Components/classComponent';

class Car extends React.Component{

	render(){
		return (
			<div>

<Welcome/>

			</div>
		);
		


		
	}
}

ReactDOM.render(<Car />,document.getElementById('root'));
