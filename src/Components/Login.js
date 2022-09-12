import React from 'react';
import { NavLink } from 'react-router-dom';
import './Css/Login.css';

const Login = () => {
  const LoginHandler=()=>{
    setIsLoggedin(true);
  }
  return (
    <>
  <div>
  <header className="header">
  </header>
  <div className="page-container login-container">
    <div className="page-content">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-sm-2 col-md-4">
            {/* <h5 class="text-white">COLUMN 1</h5> */}
          </div>
          <div className="col-sm-8 col-md-4">
            {/* <h5 class="text-white">COLUMN 2</h5> */}
            <div className="text-center">
              <a className="main-logo text-white " href>
              </a>
            </div>
            <form>
              <div className="section p-4 rounded-3 bg-white shadow">
                <h4 className="form-heading mb-4  fs-5"><NavLink to="/navbar"> Log In </NavLink></h4>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputEmail"><i className="fa-solid fa-envelope " /></span>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputPassword"><i className="fa-solid fa-lock" /></span>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="input-group mb-3">
                  <div className="col-sm-6">
                    <label className="checkbox-inline d-flex align-items-center m-0">
                      <input type="checkbox" className="form-check-input" defaultChecked="checked" name="remember" id="flexCheckDefault" /><span className="check-symbol" />
                      <span className="ms-2">Stay logged in</span>
                    </label>
                  </div>
                  <div className="col-sm-6 text-end fw-600">
                    <a href>Forgot Password?</a>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={LoginHandler}>Login <i className="fa-solid fa-right-to-bracket" /></button>
              </div></form>
            <div className="text-center mt-4 text-white ">
              Need an Skillabs Mail account? <NavLink to="/Signup" className="bottom-text">Create an account</NavLink>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
      </footer>
    </div></div></div>

    </>
  )
}

export default Login;