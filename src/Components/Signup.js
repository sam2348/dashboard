import React from 'react';
import { NavLink } from 'react-router-dom';
import './Css/signup.css';

const Signup = () => {
  return (
    <>
     <div>
  <header className="header">
  </header>
  <div className="page-container mt-3" style={{minHeight: '100vh'}}>
    <div className="page-content">
      <div className="content-wrapper">
        <form>
          <input type="hidden" name="_token" defaultValue />
          <div className="row ">
            <div className="col-md-2" />
            <div className="col-md-2 text-end mt-60">
              <a className="main-logo-big" href>
                {/* <img width="150px" src alt /> */}
              </a>
            </div>
            <div className="col-md-5">
              <h1 className="mb-20">Create your account</h1>
              <p>Manage your contacts, generate leads, run a marketing campaign,... Join us to enjoy doing
                every day sales &amp; marketing without any hassle. If you already have an account? <NavLink to="/Login">Login</NavLink></p>
              <div className="form-group control-text">
                <label> Email <span className="text-danger">*</span> </label>
                <input id="email" placeholder defaultValue type="text" name="email" className="form-control " />
              </div>
              <div className="form-group control-text">
                <label> First name  <span className="text-danger">*</span></label>
                <input id="first_name" placeholder defaultValue type="text" name="first_name" className="form-control required  " />
              </div>
              <div className="form-group control-text">
                <label> Last name  <span className="text-danger">*</span></label>
                <input id="last_name" placeholder defaultValue type="text" name="last_name" className="form-control required  " />
              </div>
              <div className="form-group control-password">
                <label>New Password  <span className="text-danger">*</span></label>
                <input id="new_password" placeholder defaultValue type="password" name="new_password" className="form-control required  " />
              </div>
              <div className="form-group control-select">
                <label>Time Zone <span className="text-danger">*</span></label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group control-select">
                <label>Language <span className="text-danger">*</span></label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                </div>
                <hr />
                <div className="row flex align-items">
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-secondary res-button"><i className="icon-check" /> Get
                      Started!</button>
                  </div>
                  <div className="col-md-8">
                    <p> By clicking the "Get Started!" button, you are creating an account at our system,
                      and you agree to our's Terms of Use and Privacy Policy.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-1" />
              <footer className="footer">
              </footer>
            </div></div></form></div></div></div></div>
 
    </>
  )
}

export default Signup;