//refracture the jsx into component component-- listObject.js  --- recommended method


import React from 'react';

/* function Person({person}){

	return (
		<div>

			<h2>
  I am {person.name} my age is {person.age}  and i know {person.skill}

			</h2>
		</div>
	)
}
export default Person */


// using key props-------------



/* function Person({persons}){

	return (
		<div>

			<h2>
  I am {persons.name} my age is {persons.age}  and i know {persons.skill}

			</h2>
		</div>
	)
}
export default Person */


// trying to access key prop in child component will throw error. following will show error


function Person({persons,key}){

	return (
		<div>

			<h2>
   {key} I am {persons.name} my age is {persons.age}  and i know {persons.skill}

			</h2>
		</div>
	)
}
export default Person

