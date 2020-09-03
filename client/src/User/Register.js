import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../User/ForgetPass.css';
import Logo from './logo.jpg';
import Navbar from '../Navbar';

export default class ForgetPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			cpassword: ''
		};
	}

	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		if (this.state.password != this.state.cpassword) alert("Password doesn't match..!");
		else if (this.state.name && this.state.email && this.state.password && this.state.cpassword) {
			axios
				.post(
					'/public/user/add',
					{
						user_name: this.state.name,
						user_email: this.state.email,
						user_password: this.state.password
					},
					{
						headers: {
							'Content-Type': 'application/json'
						}
					}
				)
				.then((response) => {
					if (response.status === 200) {
						alert('Registration Successful..!');
					} else {
						alert('Please try again..!');
					}
				})
				.catch((errors) => {
					alert('Please try again..!');
				});
		} else if (this.state.name) alert('Please enter name');
		else if (this.state.email) alert('Please enter email');
		// fetch('user/authinticate', {
		// 	method: 'POST',
		// 	body: JSON.stringify(this.state),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// })
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			toast.success('🦄 Login Successful..!!', {
		// 				position: 'top-right',
		// 				autoClose: 5000,
		// 				hideProgressBar: false,
		// 				closeOnClick: true,
		// 				pauseOnHover: true,
		// 				draggable: true
		// 			});
		// 			this.props.history.push('/userhome');
		// 		} else {
		// 			const error = new Error(res.error);
		// 			throw error;
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		toast.error('🦄 Please try again!', {
		// 			position: 'top-right',
		// 			autoClose: 5000,
		// 			hideProgressBar: false,
		// 			closeOnClick: true,
		// 			pauseOnHover: true,
		// 			draggable: true
		// 		});
		// 	});
	};

	render() {
		return (
      <>
      <Navbar />
			<div className="Login-component">
				<div className="account-pages">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-5">
								<div class="card">
									<div className="card-header pt-4 pb-4 text-center bg-primary">
										<span>
											<img src={Logo} alt="" width="80" height="80" />
										</span>
									</div>

									<div class="card-body p-4">
										<div class="text-center w-75 m-auto">
											<h4 class="text-dark-50 text-center mt-0 font-weight-bold">Register</h4>
											<p class="text-muted mb-4" />
										</div>

										<form method="post" onSubmit={this.onSubmit}>
											<div className="form-group">
												<label htmlFor="emailaddress">Name</label>
												<input
													className="form-control"
													type="text"
													name="name"
													required=""
													value={this.state.name}
													onChange={this.handleInputChange}
													placeholder="Enter your Name"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="emailaddress">Email address</label>
												<input
													className="form-control"
													type="email"
													name="email"
													required=""
													value={this.state.email}
													onChange={this.handleInputChange}
													placeholder="Enter your email"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="password">Password</label>
												<input
													className="form-control"
													type="password"
													name="password"
													required=""
													value={this.state.password}
													onChange={this.handleInputChange}
													placeholder="Enter your password"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="password">Confirm Password</label>
												<input
													className="form-control"
													type="password"
													name="cpassword"
													required=""
													value={this.state.cpassword}
													onChange={this.handleInputChange}
													placeholder="Confirm password"
												/>
											</div>

											<div class="form-group mb-0 text-center">
												<button class="btn btn-primary" type="submit" id="submit" name="submit">
													Submit
												</button>
											</div>
										</form>
									</div>
								</div>

								<div class="row mt-3">
									<div class="col-12 text-center">
										<p class="text-muted">
											Back to{' '}
											<a href="/login" class="text-muted ml-1">
												<b>Log In</b>
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      </>
		);
	}
}
