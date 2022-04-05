import React, { useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import { Navigator } from 'react-router-dom';

export default function Register() {

	const {user , setUser, loading, setLoading, updateName, registerUserWithEmail, signInWithGoogle} = useAuth();
	const initialValues = { firstName: "", email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const history = useNavigate();

	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.firstName) {
		errors.firstName = "Username is required!";
		}
		if (!values.email) {
		errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
		errors.email = "This is not a valid email format!";
		}
		if (!values.password) {
		errors.password = "Password is required";
		} else if (values.password.length < 6) {
		errors.password = "Password must be more than 6 characters";
		}
		return errors;
	};

	useEffect(() => {
		
		if (Object.keys(formErrors).length === 0 && isSubmit) {

			
			setLoading(true);
			registerUserWithEmail(formValues.email,formValues.password)
			.then( (res) => {
				updateName(formValues.firstName)
				setUser(res.user)
				history('/');
				setLoading(false);
				console.log(res.user);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally( () => {
				setLoading(false);
			})
		}
	}, [formErrors]);


	


  return (
    <div>
        <div className="d-flex flex-column flex-root">
			{/*begin::Authentication - Sign-up */}
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				{/*begin::Aside*/}
				<div className="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative" style={{ backgroundColor: '#F2C98A'}}>
					{/*begin::Wrapper*/}
					<div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
						{/*begin::Content*/}
						<div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
							{/*begin::Logo*/}
							<Link to="/" className="py-9 mb-5">
								<img alt="Logo" src="assets/media/logos/logo-2.svg" className="h-60px" />
							</Link>
							{/*end::Logo*/}
							{/*begin::Title*/}
							<h1 className="fw-bolder fs-2qx pb-5 pb-md-10" style={{color: '#986923'}}>Welcome to Letter Management</h1>
							{/*end::Title*/}
							{/*begin::Description*/}
							<p className="fw-bold fs-2" style={{color: '#986923'}}>Manage Letter
							<br />with Online</p>
							{/*end::Description*/}
						</div>
						{/*end::Content*/}
						{/*begin::Illustration*/}
						<div className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"></div>
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
						<div className="w-lg-600px p-10 p-lg-15 mx-auto">
							
							{/*begin::Heading*/}
							<div className="mb-10 text-center">
								{/*begin::Title*/}
								<h1 className="text-dark mb-3">Create an Account</h1>
								{/*end::Title*/}
								{/*begin::Link*/}
								<div className="text-gray-400 fw-bold fs-4">Already have an account?
								<Link to="/login" className="link-primary fw-bolder">Login here</Link></div>
								{/*end::Link*/}
							</div>
							{/*end::Heading*/}
							{/*begin::Action*/}
							<button onClick={ () => signInWithGoogle()} type="button" className="btn btn-light-primary fw-bolder w-100 mb-10">
							<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Sign in with Google</button>
								{/*begin::Form*/}
							<form className="form w-100" noValidate="noValidate" id="kt_sign_up_form" onSubmit={handleSubmit}>
								
								{/*end::Action*/}
								{/*begin::Separator*/}
								<div className="d-flex align-items-center mb-10">
									<div className="border-bottom border-gray-300 mw-50 w-100"></div>
									<span className="fw-bold text-gray-400 fs-7 mx-2">OR</span>
									<div className="border-bottom border-gray-300 mw-50 w-100"></div>
								</div>
								{/*end::Separator*/}
								{/*begin::Input group*/}
								<div className="row fv-row mb-7">
									{/*begin::Col*/}
									<div className="col-xl-12">
										<label className="form-label fw-bolder text-dark fs-6">First Name</label>
										<input onChange={handleChange} className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="firstName" autoComplete="off" />
										{
											formErrors.firstName && <>
												<p className="text-danger">{formErrors.firstName}</p>
											</>
										}
									</div>
									{/*end::Col*/}
									{/*begin::Col*/}
									{/* <div className="col-xl-6">
										<label className="form-label fw-bolder text-dark fs-6">Last Name</label>
										<input className="form-control form-control-lg form-control-solid" type="text" placeholder="" name="lastName" autoComplete="off" />
									</div> */}
									{/*end::Col*/}
								</div>
								{/*end::Input group*/}
								{/*begin::Input group*/}
								<div className="fv-row mb-7">
									<label className="form-label fw-bolder text-dark fs-6">Email</label>
									<input onChange={handleChange} className="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autoComplete="off" />
									{
										formErrors.email && <>
											<p className="text-danger">{formErrors.email}</p>
										</>
									}
								</div>
								{/*end::Input group*/}
								{/*begin::Input group*/}
								<div className="mb-10 fv-row" data-kt-password-meter="true">
									{/*begin::Wrapper*/}
									<div className="mb-1">
										{/*begin::Label*/}
										<label className="form-label fw-bolder text-dark fs-6">Password</label>
										{/*end::Label*/}
										{/*begin::Input wrapper*/}
										<div className="position-relative mb-3">
											<input onChange={handleChange} className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autoComplete="off" />
											<span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
												<i className="bi bi-eye-slash fs-2"></i>
												<i className="bi bi-eye fs-2 d-none"></i>
											</span>
										</div>
										{/*end::Input wrapper*/}
										{/*begin::Meter*/}
										<div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
										</div>
										{/*end::Meter*/}
									</div>
									{/*end::Wrapper*/}
									{/*begin::Hint*/}
									
									<div className="text-muted">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div>
									{
										formErrors.password && <>
											<p className="text-danger">{formErrors.password}</p>
										</>
									}
									{/*end::Hint*/}
								</div>
								{/*end::Input group=*/}
								{/*begin::Input group*/}
								{/* <div className="fv-row mb-5">
									<label className="form-label fw-bolder text-dark fs-6">Confirm Password</label>
									<input className="form-control form-control-lg form-control-solid" type="password" placeholder="" name="confirmPassword" autoComplete="off" />
								</div> */}
								{/*end::Input group*/}
								{/*begin::Input group*/}
								{/* <div className="fv-row mb-10">
									<label className="form-check form-check-custom form-check-solid form-check-inline">
										<input onChange={setIsAggree(!isAggree)} className="form-check-input" type="checkbox" name="toc" value="1" />
										<span className="form-check-label fw-bold text-gray-700 fs-6">I Agree
										<a href="#" className="ms-1 link-primary">Terms and conditions</a>.</span>
									</label>
								</div> */}
								{/*end::Input group*/}
								{/*begin::Actions*/}
								<div className="text-center">
									<button type="submit" id="kt_sign_up_submit" className="btn btn-lg btn-primary">
										{loading ? (
											<span className="indicator-progress d-block">Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										) : (
											<span className="indicator-label">Submit</span>
										)}
										
										
									</button>
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
			{/*end::Authentication - Sign-up*/}
		</div>
    </div>
  )
}
