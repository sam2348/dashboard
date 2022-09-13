import React,{useState,useEffect} from 'react'
import './Css/Navbar.css'
import { NavLink } from 'react-router-dom'
import userPlaceholder from './img/user-placeholder.svg'
import signStand from './img/sign-stand.svg'


const Navbar = (props) => {
  const isLoggedin = props.data;
  const[data,setData]=useState()
  const logoutHamdler =()=>{
    setData(false)
  }
  const addData=()=>{
    setData(isLoggedin)
  }
 useEffect(() => {
  addData();
 },[props])

 
  return (
    <>
    { data ? 
    <>
    <nav className="navbar navbar-expand-xl navbar-dark fixed-top navbar-main py-0 navbar-backend">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">
      <img src="photo/nav.png" width="140px" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/*-----Dashboard*/}
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">
            <i className="fa-solid fa-house-user" />Dashboard</NavLink>
        </li>
        {/*-----Dashboard*/}
        {/*-----CUSTOMER*/}
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-user" />Customer</NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
          </ul>
        </li>
        {/*-----CUSTOMER*/}
        {/*-----Plan*/}
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-book" />Plan</NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
          </ul>
        </li>
      </ul>
      {/*----REPORT*/}
      {/*------RIGHT SIDE*/}
      <div className="navbar-right">
        <ul className="navbar-nav ">
          <li className="nav-item dropdown">
            <a href className="nav-link d-flex align-items-center  py-3  dropdown-toggle" data-bs-toggle="dropdown">
              <img className="avatar-icon me-2" src={userPlaceholder} width="80px" />
              <span>Sandeep Sharma</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end ">
              <li style={{width: 500}}>
                <div className="d-flex mb-2">
                  <div className="avatar me-3">
                    <a className="navbar-brand" href="#">
                      <img className="avatar-image ms-2" src={userPlaceholder} width="80px" />
                    </a>
                  </div>
                  <div className="part-2">                       
                    <p className="profile-details"> <span className="me-2 fs-6">Sandeep Sharma</span></p>
                    <p className="profile-email">sandeep.codesoftic@gmail.com</p>
                    <span className="active-button">Active</span>
                  </div>
                </div>
              </li>
              <li className="nav-item active"><a href className="dropdown-item d-flex align-items-center">
                  <div className="navbar-icon">
                    <i className="far fa-user-circle" />
                  </div>
                  &nbsp;Account
                </a></li>
              <li className="nav-item">
                <a href className="dropdown-item d-flex align-items-center">
                  <div className="navbar-icon">
                    <i className="fas fa-user-cog" />
                  </div>
                  Admin API
                </a>
              </li>
              <li className="nav-item" onClick={logoutHamdler}><NavLink to="" className="dropdown-item d-flex align-items-center">
                  <div className="navbar-icon">
                    <i className="fas fa-power-off" />
                  </div>     
                  &nbsp;Logout            
                </NavLink></li>
              <li className="p-4 d-flex align-items-center justify-content-center">
                <img src={signStand} width="80px" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/*------RIGHT SIDE*/}
    </div>
  </div>
</nav>
    </> : 
    <>
  <nav className="navbar navbar-expand-xl navbar-dark fixed-top navbar-main py-0 navbar-backend">
   <div className="container-fluid ">
    <a className="navbar-brand" href="#">
      <img src="photo/nav.png" width="140px" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown ">
          <NavLink to="/Login" className="nav-link">
            <i className="fa-solid fa-book" />Login
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="/Signup" className="nav-link">
            <i className="fa-solid fa-book" />Signup
          </NavLink>
        </li>
      </ul>
     </div>
    </div>
</nav>
    </>
    }
    </>
  )
}

export default Navbar