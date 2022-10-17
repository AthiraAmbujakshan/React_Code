 import React  from 'react';
 
 
 /* class PureCmp extends React.PureComponent {
	 render() {
		 return (
			 <div>
				 PureComponent
			 </div>
		 );
	 }
 }
 
 
 
 export default PureCmp; */


 //to see the difference b/w pure and regular components


 class PureCmp extends React.PureComponent {
	 render() {
		 console.log('****purecomponent render******')
		 return (
			 <div>
				 PureComponent {this.props.name}
			 </div>
		 );
	 }
 }
 
 
 
 export default PureCmp; 