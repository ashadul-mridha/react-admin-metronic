import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

export default function Login() {
	// console.log('context', useAuth() );
	const [email,setEmail] = useState();
	const [password , setPassword] = useState();
	
	let navigate = useNavigate();
	let location = useLocation();

	let redirectLocation = location.state?.from?.pathname || "/";

	const handleEmail = e => {
		setEmail(e.target.value);
	}
	
	const handlePassword = e => {
		setPassword(e.target.value);
	}
	const {  setUser, loading, setLoading, signInWithEmail, signInWithGoogle} = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		
		setLoading(true);
		signInWithEmail(email,password)
		.then( (res) => {
			setUser(res.user);
			setLoading(false);
		})
		.catch( error => {
			console.log(error);
		})
		.finally( () => {
			navigate(redirectLocation, { replace: true });
			setLoading(false);
		})
	}
	// console.log('data', data);
  return (
    <>
    <div className="d-flex flex-column flex-root">
			{/*begin::Authentication - Sign-in */}
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				{/*begin::Aside*/}
				<div className="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative" style={{ backgroundColor: '#F2C98A'}}>
					{/*begin::Wrapper*/}
					<div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
						{/*begin::Content*/}
						<div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
							{/*begin::Logo*/}
							<a href="../../demo1/dist/index.html" className="py-9 mb-5">
								<img alt="Logo" src="assets/media/logos/logo-2.svg" className="h-60px" />
							</a>
							{/*end::Logo*/}
							{/*begin::Title*/}
							<h1 className="fw-bolder fs-2qx pb-5 pb-md-10" style={{color: "#986923"}}>Welcome to Letter Management</h1>
							{/*end::Title*/}
							{/*begin::Description*/}
							<p className="fw-bold fs-2" style={{color: '#986923'}}>Store Letter
							<br />with Online</p>
							{/*end::Description*/}
						</div>
						{/*end::Content*/}
						{/*begin::Illustration*/}
						<div className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px login-register-bg"></div>
						{/*end::Illustration*/}
					</div>
					{/*end::Wrapper*/}
				</div>
				{/*end::Aside*/}
				{/*begin::Body*/}
				<div className="d-flex flex-column flex-lg-row-fluid py-10">
					{/*begin::Content*/}
					<div className="d-flex flex-center flex-column flex-column-fluid">
						{/*begin::Wrapper*/}
						<div className="w-lg-500px p-10 p-lg-15 mx-auto">
							{/*begin::Form*/}
							<form onSubmit={handleSubmit} className="form w-100" noValidate="noValidate" id="kt_sign_in_form" action="#">
								{/*begin::Heading*/}
								<div className="text-center mb-10">
									{/*begin::Title*/}
									<h1 className="text-dark mb-3">Sign In to Letter Managemant</h1>
									{/*end::Title*/}
									{/*begin::Link*/}
									<div className="text-gray-400 fw-bold fs-4">New Here?
									<Link to='/register' className="link-primary fw-bolder">Create an Account</Link></div>
									{/*end::Link*/}
								</div>
								{/*begin::Heading*/}
								{/*begin::Input group*/}
								<div className="fv-row mb-10">
									{/*begin::Label*/}
									<label className="form-label fs-6 fw-bolder text-dark">Email</label>
									{/*end::Label*/}
									{/*begin::Input*/}
									<input onChange={handleEmail} className="form-control form-control-lg form-control-solid" type="text" name="email" autoComplete="off" />
									{/*end::Input*/}
								</div>
								{/*end::Input group*/}
								{/*begin::Input group*/}
								<div className="fv-row mb-10">
									{/*begin::Wrapper*/}
									<div className="d-flex flex-stack mb-2">
										{/*begin::Label*/}
										<label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
										{/*end::Label*/}
										{/*begin::Link*/}
										<a href="../../demo1/dist/authentication/layouts/aside/password-reset.html" className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
										{/*end::Link*/}
									</div>
									{/*end::Wrapper*/}
									{/*begin::Input*/}
									<input onChange={handlePassword}  className="form-control form-control-lg form-control-solid" type="password" name="password" autoComplete="off" />
									{/*end::Input*/}
								</div>
								{/*end::Input group*/}
								{/*begin::Actions*/}
								<div className="text-center">
									{/*begin::Submit button*/}
									<button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5">
										{
											loading ? (
												<span className="indicator-progress d-block">Please wait...
												<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
											) : (
												<span className="indicator-label">Continue</span>
											)
										}
										
										
									</button>
									{/*end::Submit button*/}
									{/*begin::Separator*/}
									<div className="text-center text-muted text-uppercase fw-bolder mb-5">or</div>
									{/*end::Separator*/}
									{/*begin::Google link*/}
									
									{/*end::Google link*/}
									{/*begin::Google link*/}
									{/* <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
									<img alt="Logo" src="assets/media/svg/brand-logos/facebook-4.svg" className="h-20px me-3" />Continue with Facebook</a> */}
									{/*end::Google link*/}
									{/*begin::Google link*/}
									{/* <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100">
									<img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg" className="h-20px me-3" />Continue with Apple</a> */}
									{/*end::Google link*/}
								</div>
								<div className="text-center">
									<button onClick={ () => signInWithGoogle() } className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
									<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Continue with Google</button>
								</div>
								{/*end::Actions*/}
							</form>
							{/*end::Form*/}
						</div>
						{/*end::Wrapper*/}
					</div>
					{/*end::Content*/}
					{/*begin::Footer*/}
					<div className="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
						{/*begin::Links*/}
						<div className="d-flex flex-center fw-bold fs-6">
							<a href="https://keenthemes.com" className="text-muted text-hover-primary px-2" target="_blank">About</a>
							<a href="https://devs.keenthemes.com" className="text-muted text-hover-primary px-2" target="_blank">Support</a>
							<a href="https://1.envato.market/EA4JP" className="text-muted text-hover-primary px-2" target="_blank">Purchase</a>
						</div>
						{/*end::Links*/}
					</div>
					{/*end::Footer*/}
				</div>
				{/*end::Body*/}
			</div>
			{/*end::Authentication - Sign-in*/}
		</div>
    </>
  )
}
