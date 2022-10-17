import React,{useState} from 'react'
import {DropdownItems} from './DropdownItems'
import {Link}  from 'react-router-dom'
import './Dropdown.css'

function Dropdown(){
	const [dropdown,setDropdown] =useState(false);

return(
	<div>

<ul className ={dropdown ? "dropdown-submenu clicked"  :"dropdown-submenu" }     onClick={()=>setDropdown(!dropdown)}>

{DropdownItems.map(item=>{
return(
	<li key ={item.id}>
		<Link  to ={item.path}className ={item.cName}   onClick={()=>setDropdown(false)}>{item.title}</Link>
	</li>
)



})}


</ul>

	</div>
)

}
export default Dropdown