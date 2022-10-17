import React from 'react'
import './ValidationFormStyle.css'
import Select from 'react-select'
import {useLocation,NavLink} from 'react-router-dom'


const Database = (props) => {


const location = useLocation() 
const{fields:f}	 =  location.state

 

 


	return (

<div>
		<div className='logindetail'>
			
                <p>Logged In User-:<NavLink to ="#" activeStyle={{color:'blue'}}>{f.email} </NavLink></p>
				
			
			   
				
   </div>
		<div className="wrapper">
			
			

			<form className='form'>

				<div style={props.style}>
					<label for="database"><b>Choose Database</b></label>
					<Select options={props.options} defaultValue={props.options[0]} />
				</div>




				<div>
					<label for="hostName"><b>DB Host Name </b></label>
					<input type="text" name='hostName' required />
				</div>


				<div>
					<label for="userName"><b>DB User Name</b></label>
					<input type="text" name='userName' required />
				</div>

				<div>
					<label for="dBpassword"><b>DB Password</b></label>
					<input type="text" name='dBpassword' required />
				</div>


				<div>
					<label for="serviceName"><b>Service Name</b></label>
					<input type='text' name='serviceName' required />
				</div>

				<div>
					<label for="dbPortNumber"><b>DB Port Number</b></label>
					<input type='text' name='dbPortNumber' required />
				</div>

			</form>

			<div className="right-img" />
		</div>
		</div>

	)
}

export default Database
