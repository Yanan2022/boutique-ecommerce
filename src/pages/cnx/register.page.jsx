

const Register = () => {
    return (
        <>
            {/*main area*/}
            <main id="main" className="main-site left-sidebar">
                <div className="container">
                    <div className="wrap-breadcrumb">
                        <ul>
                            <li className="item-link">
                                <a href="#" className="link">
                                    home
                                </a>
                            </li>
                            <li className="item-link">
                                <span>Register</span>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">
                            <div className=" main-content-area">
                                <div className="wrap-login-item ">
                                    <div className="register-form form-item ">
                                        <form
                                            className="form-stl"
                                            action="#"
                                            name="frm-login"
                                            method="get"
                                        >
                                            <fieldset className="wrap-title">
                                                <h3 className="form-title">Create an account</h3>
                                                <h4 className="form-subtitle">Personal infomation</h4>
                                            </fieldset>
                                            <fieldset className="wrap-input">
                                                <label htmlFor="frm-reg-lname">Name*</label>
                                                <input
                                                    type="text"
                                                    id="frm-reg-lname"
                                                    name="reg-lname"
                                                    placeholder="Last name*"
                                                />
                                            </fieldset>
                                            <fieldset className="wrap-input">
                                                <label htmlFor="frm-reg-email">Email Address*</label>
                                                <input
                                                    type="email"
                                                    id="frm-reg-email"
                                                    name="reg-email"
                                                    placeholder="Email address"
                                                />
                                            </fieldset>
                                            <fieldset className="wrap-functions ">
                                                <label className="remember-field">
                                                    <input
                                                        name="newletter"
                                                        id="new-letter"
                                                        defaultValue="forever"
                                                        type="checkbox"
                                                    />
                                                    <span>Sign Up for Newsletter</span>
                                                </label>
                                            </fieldset>
                                            <fieldset className="wrap-title">
                                                <h3 className="form-title">Login Information</h3>
                                            </fieldset>
                                            <fieldset className="wrap-input item-width-in-half left-item ">
                                                <label htmlFor="frm-reg-pass">Password *</label>
                                                <input
                                                    type="text"
                                                    id="frm-reg-pass"
                                                    name="reg-pass"
                                                    placeholder="Password"
                                                />
                                            </fieldset>
                                            <fieldset className="wrap-input item-width-in-half ">
                                                <label htmlFor="frm-reg-cfpass">Confirm Password *</label>
                                                <input
                                                    type="text"
                                                    id="frm-reg-cfpass"
                                                    name="reg-cfpass"
                                                    placeholder="Confirm Password"
                                                />
                                            </fieldset>
                                            <input
                                                type="submit"
                                                className="btn btn-sign"
                                                defaultValue="Register"
                                                name="register"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*end main products area*/}
                        </div>
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </main>
            {/*main area*/}
        </>

    );
}

export default Register;