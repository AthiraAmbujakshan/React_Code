import React from 'react';

/*function NamesList(){

	const names =['athira', 'appu','ammu']

	return(
		<div>

			<h2>{names[0]}</h2>
			<h2>{names[1]}</h2>
			<h2>{names[2]}</h2>
		</div>
	)
}

export default NamesList*/

//using map method to render the list of names


function NamesList(){

	/* const names =['athira', 'appu','ammu']

	return(
		<div>
         {
           names.map(name=><h2>{name}</h2>)
	   
        }

		</div>
	)
}

export default NamesList */



const names =['athira', 'appu','ammu']
const nameslist = names.map(name=><h2>{name}</h2>)

	return(
		<div>
         {
          nameslist
	   
        }

		</div>
	)
}

export default NamesList



