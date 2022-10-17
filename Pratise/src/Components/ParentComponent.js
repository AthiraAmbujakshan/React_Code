import React from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {
	


	const Nameslist =[

{
	id:1,
	name:'Athira',
	age :24,
	skill :'react'

},
{
	id:2,
	name:'arjun',
	age :22,
	skill :'angular'
},

{
	id:3,
	name :'ammu',
	age :20,
	skill :'vue'

}


	]

const list =Nameslist.map(person=>

<ChildComponent persons ={person} /> 
)

	return (
   <div>{list}</div>

	)
}
  
	


export default ParentComponent;