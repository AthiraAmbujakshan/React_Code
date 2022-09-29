import React from 'react'

/*function PersonNames(){

	const Names =[

{
	id:1,
	name :'Athira',
	age :24,
	skill :'react'
},

{
	id:2,
	name :'Arjun',
	age :22,
	skill :'Angular'
},

{
	id:3,
	name :'Adithya',
	age :20,
	skill :'javascript'
}

	]


const personList = Names.map(person =>(

<h2>I am {person.name} my age is {person.age}  and i know {person.skill}</h2>


))

return (

	<div>
		{personList}
	</div>
)


}
export default PersonNames */



//refracture the jsx into component component-- person.js  --- recommended method



/* import Person from './person'
function PersonNames(){

	const Names =[

{
	id:1,
	name :'Athira',
	age :24,
	skill :'react'
},

{
	id:2,
	name :'Arjun',
	age :22,
	skill :'Angular'
},

{
	id:3,
	name :'Adithya',
	age :20,
	skill :'javascript'
}

	]


const personList = Names.map(person =>(

<Person person ={person}/>


))

return (

	<div>
		{personList}
	</div>
)


}
export default PersonNames */

//using key props -----------

import Person from './person'
function PersonNames(){


	const Names =[


		{
			id:1,
			name :'athira',
			age :24,
			skill:'react'
		},
		{
			id:2,
			name :'arjun',
			age :22,
			skill:'angular'
		},

		{
			id:3,
			name :'adithya',
			age :20,
			skill:'javascript'
		}

	]
	const personList =Names.map(person=>
<Person key ={person.id} persons ={person} />
	)
	return(
		<div>{personList}</div>
	)	
		
}
export default PersonNames