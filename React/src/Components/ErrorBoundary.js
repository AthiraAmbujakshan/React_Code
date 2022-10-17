import React from 'react'

function ErrorBoundary ({heroName}){

	if(heroName ==='joker'){
		throw new Error("Not a hero")
	}

	return(
		<div>
			{heroName}
		</div>
	)

	
}
export default ErrorBoundary