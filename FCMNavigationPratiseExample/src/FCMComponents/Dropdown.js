import React, { useState } from 'react'

//import { Link } from 'react-router-dom'
import './Dropdown.css'

function Dropdown() {
	const [dropdown, setDropdown] = useState(false);
	return (
		<div>
			
			<ul className={dropdown ? 'services-submenu.clicked': 'services-submenu'}
			onClick={() => setDropdown(!dropdown)}>

				<li>Sign Out {dropdown &&  <Dropdown /> } 
				</li> 
				</ul>
					
				</div>		
					)
				

		


	

}
export default Dropdown