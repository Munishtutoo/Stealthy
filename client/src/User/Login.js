import React, { Fragment, Component } from 'react';
import '../User/login.css';
import Logo from './logo.jpg';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			isChecked: false,
			loading: true,
			redirect: false
		};
	}

	componentDidMount() {
		fetch('/checkToken', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
			.then((res) => {
				if (res.status === 200) {
					this.setState({ loading: false });
				} else {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch((err) => {
				this.setState({ loading: false, redirect: true });
			});
	}

	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleChangeChk = () => {
		console.log(this.state.isChecked);
		this.setState({ isChecked: !this.state.isChecked });
	};

	onSubmit = (event) => {
		event.preventDefault();
		fetch('/api/authenticate', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				if (res.status === 200) {
					alert('Login Successful');
					this.props.history.push('/userhome');
				} else {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch((err) => {
				alert('Please try again');
			});
	};

	render() {
		const { loading, redirect } = this.state;
		if (loading) {
			return null;
		}
		if (redirect) {
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
														Sign In
													</h4>
													<p className="text-muted mb-4">
														Enter your email address and password to access your panel.
													</p>
												</div>
												<form onSubmit={this.onSubmit}>
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
														{/* <p class="text-muted float-right"><a href="ForgetPassword.js" class="text-muted ml-1"><b>Forget Your password?</b></a></p> */}
														{/* <a href="index.php" className="text-muted float-right"><small>Forgot your password?</small></a> */}
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
													<div className="form-group mb-3">
														<a href="/forget" className="text-muted float-right">
															<small>Forgot your password?</small>
														</a>
														{/* <div className="custom-control custom-checkbox">
														<input
															type="checkbox"
															className="custom-control-input"
															id="checkbox-signin"
															checked={this.state.isChecked}
															onChange={this.handleChangeChk}
														/>
														<label
															className="custom-control-label"
															htmlFor="checkbox-signin"
														>
															Remember me
														</label>
													</div> */}
													</div>
													<div className="form-group mb-0 text-center">
														<button className="btn btn-primary" type="submit" name="submit">
															Log In
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
		} else {
			return <Redirect to="/userhome" />;
		}
	}
}
