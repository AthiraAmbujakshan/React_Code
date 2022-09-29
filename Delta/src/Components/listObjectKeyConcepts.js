import React from 'react';
	/* function NamesList(){

		const names =['Bruce','Clark','Diana']
		const namesList = names.map(name =><h2>{name}</h2>)

		return(
			<div>{namesList}</div>
		)


	}

export default NamesList; */

//if we have  duplicate names----



function NamesList(){

		const names =['Bruce','Clark','Diana','Bruce']
		const namesList = names.map((name,index) =><h2 key ={index}> {index} {name}</h2>)

		return(
			<div>{namesList}</div>
		)


	}

export default NamesList;

