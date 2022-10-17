import React from 'react'



class ValidatePrerequisite   extends React.Component{
	render(){
		return(
			<div>
				<br></br>
			<p >	Greetings of the Day !! </p>
			<br></br>
<p >Thanks for helping us to continue servicing you with a secure connectivity, we stand behind to make this Migration Process more easier with fair recommendations</p>

<p >To avoid failures while Data Migraton progress, we need to hear some confirmation as part of prerequisites </p>
<br></br>
<p > 1. All the Customer(s) from the legacy system (irrespective of Active Inactive status) should have been made available in FCM before proceeding with this Migration</p> 
<p > 2. All the Accuount(s) & Transaction(s) from the legacy system (irrespective of Orphans/Adopt category) should be available in FCM before proceeding with this Migration </p>
<p >3. FCM User interface should have been brought down, so that no users can access FCM UI while migration is in progress. This is to aviod any unnecessary delay in DB Transactions </p>
<p >4. Any FCM level Configurations like Mandator Creation, FCM Segement Creation, Case Type Creations and other necessary configuration if any, should be configured before Proceeding</p>


<p >Click on [Validate) to check in FCM System, Click on [Ok Proceed] to continue if all the prerequisites are met. Click (Cancel] if any workaround is pending</p>
			</div>
		)
	}
}
export default ValidatePrerequisite