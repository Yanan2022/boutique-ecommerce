

const Login = () => {
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
                                <span>login</span>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">
                            <div className=" main-content-area">
                                <div className="wrap-login-item ">
                                    <div className="login-form form-item form-stl">
                                        <form name="frm-login">
                                            <fieldset className="wrap-title">
                                                <h3 className="form-title">Log in to your account</h3>
                                            </fieldset>
                                            <fieldset className="wrap-input">
                                                <label htmlFor="frm-login-uname">Email Address:</label>
                                                <input
                                                    type="text"
                                                    id="frm-login-uname"
                                                    name="email"
                                                    placeholder="Type your email address"
                                                />
                                            </fieldset>
                                            <fieldset className="wrap-input">
                                                <label htmlFor="frm-login-pass">Password:</label>
                                                <input
                                                    type="password"
                                                    id="frm-login-pass"
                                                    name="pass"
                                                    placeholder="************"
                                                />
                                            </fieldset>
                                            <fieldset className="wrap-input">
                                                <label className="remember-field">
                                                    <input
                                                        className="frm-input "
                                                        name="rememberme"
                                                        id="rememberme"
                                                        defaultValue="forever"
                                                        type="checkbox"
                                                    />
                                                    <span>Remember me</span>
                                                </label>
                                                <a
                                                    className="link-function left-position"
                                                    href="#"
                                                    title="Forgotten password?"
                                                >
                                                    Forgotten password?
                                                </a>
                                            </fieldset>
                                            <input
                                                type="submit"
                                                className="btn btn-submit"
                                                defaultValue="Login"
                                                name="submit"
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

export default Login;