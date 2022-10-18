import React ,{useState}from 'react'
import {Link } from 'react-router-dom';
import './NavbarStyle.css'
import {navItems} from './NavItems'
import Button from './Button'
import Dropdown from './Dropdown'

function NavBar(){

	const[dropdown, setDropdown] =useState(false)
	return(
		<>
		<nav className='navbar'>

			<Link to ="/" className ="navbar-logo">

				NATURE
			
			</Link>
			<ul className='nav-items'>
{navItems.map(item=>{

	if(item.title==='Services'){


		return(
	<li key ={item.id} className= {item.cName} 
	onMouseEnter={()=>setDropdown(true)}
		onMouseLeave={()=>setDropdown(false)}
	
	>
		<Link to ={item.path} 
		
		
		>{item.title}</Link>
		{dropdown &&  <Dropdown /> }
	</li>
	)
	}

	return(
	<li key ={item.id} className= {item.cName} >
		<Link to ={item.path}>{item.title}</Link>

	</li>
	)
})}

			</ul>
			<Button />
		</nav>
		<Dropdown />
		</>
	)
}
export default NavBar