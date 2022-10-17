import React from 'react'

/* function Columns(){

	return(
		<React.Fragment>
			<td>Name</td>
			<td>Athira</td>
		</React.Fragment>
	)
}
export default Columns */

//react fragments using key attribute




/* function Columns(){

	const items =[
		{
			id:1,
			fruit:'apple',
			color:'red'
		},
		{
			id:2,
			fruit:'mango',
			color:'yellow'
		},

	]

	return(
		<React.Fragment>
{
			items.map(item =>(
				
				<React.Fragment key ={item.id}> 
				<h1>Fruit list </h1>
				<p>Two fruits displayed</p>
    </React.Fragment>
			))
}
			<td>Name</td>
			<td>Athira</td>
		</React.Fragment>
	)
}
export default Columns */


//use <> instead of React.Fragmemt

function Columns(){

	return(
		<>
			<td>Name</td>
			<td>Athira</td>
		</>
	)
}
export default Columns