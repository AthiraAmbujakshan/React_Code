import React from 'react'


/* const UpdatedComponent =(OriginalComponent)=>{
	class NewComponent extends React.Component{
		render(){
			return(
				<OriginalComponent name='vishwas' />
			)
		}
	}


return NewComponent 
}

export default UpdatedComponent */


//using counter functionality  in hoc will elimates duplicates lines of code in both ClickCounter.js and HoverCounter.js





const UpdatedComponent =(OriginalComponent)=>{
	class NewComponent extends React.Component{


constructor() {
		super()
		this.state = { count: 0 }
	}

	incrementCount = () => {
		this.setState(prevstate => {
			return { count: prevstate.count + 1 }
		})
	}






		render(){
			return(
				<OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
			)
		}
	}


return NewComponent 
}

export default UpdatedComponent
