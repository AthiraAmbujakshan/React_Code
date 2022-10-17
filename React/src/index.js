import React from 'react';
import ReactDOM from 'react-dom';
//import Form from './Components/form';
//import LifecycleMounting from './Components/LifecycleMounting';
//import LifecycleUpate from './Components/LifecycleUpdate'
//import FragmentDemo from './Components/FragmentDemo'
//import Table from './Components/Table';
//import PureCmp from './Components/PureComponent'
//import ParentComponent from './Components/ParentComponent'
 //import  ReactMemoParent from './Components/ReactMemoParent'
  //import RefsDemo from './Components/RefsDemo'
//import RefsDemoSecondApproach from './Components/RefsDemoSecondApproach'
   //import RefsInClassParent from './Components/RefsInClassParent'
  // import ForwardRefsParent from './Components/ForwardRefsParent'
//import ReactPortalDemo from './Components/ReactPortalDemo'
import ErrorBoundary from './Components/ErrorBoundary'
import Error from './Components/Error'


class APP extends React.Component{
	render(){

		return(
			//<div><Form /></div>
			//<div><LifecycleMounting  /></div>
			//<div><LifecycleUpate /> </div>
			//<div> <FragmentDemo /></div>
			//<div><Table /></div>
			//<div> <PureCmp /></div>
			//<div ><ParentComponent /></div>
			//<div><ReactMemoParent  /> </div>
			//<div> <RefsDemo /></div>
			//<div> <RefsDemoSecondApproach /></div>
			//<div> <RefsInClassParent  /></div>
			//<div> <ForwardRefsParent  /></div>
            //<div>< ReactPortalDemo /></div>
<div>
	<Error>
<ErrorBoundary heroName='Batsman' />
</Error>

<Error>
<ErrorBoundary heroName='SuperMan' />
</Error>

<Error>
<ErrorBoundary heroName='joker' />
</Error>

</div>
			
		)
	}
}

ReactDOM.render(<APP />, document.getElementById('root'));
