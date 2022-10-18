import React from 'react'
import{Link} from 'react-router-dom'
import './ButtonStyle.css'

function Button(){

	return(
		<Link to="Signup">
			<button className ="btn">Sign up</button>

		</Link>
	)
}
export default Button
