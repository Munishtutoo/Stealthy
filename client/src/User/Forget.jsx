import React, { Fragment, Component } from 'react';
import '../User/login.css';
import Logo from './logo.jpg';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';

export default class Forget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			otp: '',
			otp1: '',
			otp2: '',
			pass: '',
			btnName: 'Send OTP',
			v1: true,
			v2: false,
			v3: false
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
		if (this.state.btnName === 'Send OTP') {
			axios
				.post('/public/user/generateOtp', JSON.stringify(this.state), {
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then((response) => {
					if (response.status === 200) {
						this.setState({ otp2: response.data, btnName: 'Verify OTP', v1: false, v2: true });
						alert('OTP sent to email');
					} else {
						const error = new Error(response.error);
						throw error;
					}
				})
				.catch((errors) => {
					alert('Please try again');
					console.log(errors);
				});
		} else if (this.state.btnName === 'Verify OTP') {
			let temp = this.state.otp1;
			let temp1 = this.state.otp2;
			if (temp == temp1) {
				this.setState({ btnName: 'Update Password', v2: false, v3: true });
				alert('OTP Verified, enter new password');
			} else {
				alert('Please enter valid otp');
			}
		} else if (this.state.btnName === 'Update Password') {
			if (this.state.pass) {
				axios
					.post('/public/user/updatePass', JSON.stringify(this.state), {
						headers: {
							'Content-Type': 'application/json'
						}
					})
					.then((response) => {
						if (response.status === 200) {
							this.setState({ btnName: 'Send OTP', v3: false, v1: true });
							alert('Password updated');
							this.props.history.push('/login');
						} else {
							const error = new Error(response.error);
							throw error;
						}
					})
					.catch((errors) => {
						alert('Please try again');
						console.log(errors);
					});
			} else {
				alert('Please try again');
			}
		}
	};

	render() {
		return (
			<Fragment>
				<Navbar />
				<div className="Login-component">
					<div className="account-pages">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-5">
									<div className="card">
										<div className="card-header pt-4 pb-4 text-center bg-primary">
											<img src={Logo} alt="" width="80" height="80" />
										</div>
										<div className="card-body p-4">
											<div className="text-center w-75 m-auto">
												<h4 className="text-dark-50 text-center mt-0 font-weight-bold">
													Forget Password
												</h4>
											</div>
											<form onSubmit={this.onSubmit}>
												<div className="form-group">
													<label htmlFor="email">Email address</label>
													<input
														className="form-control"
														type="email"
														name="email"
														value={this.state.email}
														onChange={this.handleInputChange}
														placeholder="Enter your email"
													/>
												</div>

												<div className="form-group">
													<label htmlFor="otp1">Enter OTP</label>
													<input
														className="form-control"
														type="text"
														name="otp1"
														value={this.state.otp1}
														onChange={this.handleInputChange}
														placeholder="Enter OTP"
													/>
												</div>

												<div className="form-group">
													<label htmlFor="pass">Password</label>
													<input
														className="form-control"
														type="password"
														name="pass"
														value={this.state.pass}
														onChange={this.handleInputChange}
														placeholder="Enter your password"
													/>
												</div>

												<br />
												<div className="form-group mb-0 text-center">
													<button className="btn btn-primary" type="submit" name="submit">
														{this.state.btnName}
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
