import React from 'react';

/* function InlineStyle(){

const heading = {
	fontSize:'72px',
	color :'blue'
}


	return(
		<div>
			
			<h1 style={heading}>INLINESTYLE</h1>
		</div>
	)
}
export default InlineStyle */

//--------css module stylesheet classes are locally scope by default--------

//accesing appstyle.css in child component will wrk , 
//but accessing appstyle.module.css will throw compilation error




/* function InlineStyle(){

const heading = {
	fontSize:'72px',
	color :'blue'
}


	return(
		<div>
			<h1 className  ='error'>ERROR </h1>
			<h1 style={heading}>INLINESTYLE</h1>
		</div>
	)
}
export default InlineStyle
 */

 // following will throw compilation error
function InlineStyle(){

const heading = {
	fontSize:'72px',
	color :'blue'
}


	return(
		<div>
			<h1 className = {styles.success}>SUCCESS</h1>
			<h1 style={heading}>INLINESTYLE</h1>
		</div>
	)
}
export default InlineStyle
