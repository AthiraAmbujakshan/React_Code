import React from 'react'
import './LoginFormStyle.css'


class Login extends React.Component {


	constructor() {
		super()
		this.state = {
			fields: {
				email: '',
				psw: ''
			}
		}
	}

	changeHandler(field, event) {
		let fields = this.state.fields
		fields[field] = event.target.value

		this.setState({ fields });
		console.log(fields)

	}

	submitHandler = (event) => {


		this.props.history.push({
			pathname: '/validate',
			state: this.state 
		});

		event.preventDefault()

	}

	render() {

		return (

			<div >
				<h1 className='heading'>FCM Data Migration</h1>
				<div className='wrapper'>

					<form className="container" onSubmit={this.submitHandler} >



						<div>
							<label><b>Email</b></label>
							<input type='email' placeholder="Enter Email"

								onChange={this.changeHandler.bind(this, 'email')}
								value={this.state.fields['email']} required />
						</div>
						<div>
							<label for="psw"><b>Password</b></label>
							<input type="password" placeholder="Enter Password"
								onChange={this.changeHandler.bind(this, 'psw')} value={this.state.fields['psw']} required />
						</div>

						<button type="submit" className="btn" >Login</button>
					</form>


				</div>
			</div>
		)
	}
}
export default Login;

