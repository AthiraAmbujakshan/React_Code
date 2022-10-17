import React ,{useState}from 'react'
import './ValidationFormStyle.css'
import Select from 'react-select'
import {useLocation,} from 'react-router-dom'
import Dropdown from './Dropdown'


const Database = (props) => {

const[dropdown, setDropdown] =useState(false)

const location = useLocation() 
const{fields:f}	 =  location.state


	return (
<div>
   <div>
		<nav  className='navbar'>
			<p> Logged In User-:</p>

			<ul className='nav-items'>
			<li    
			onMouseEnter={()=>setDropdown(true)}
		onMouseLeave={()=>setDropdown(false)}>
			{f.email}
              {dropdown &&  <Dropdown /> } </li> 
			   </ul>
			   </nav>
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
