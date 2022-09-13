import React, { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PrivateRoute from './Components/PrivateRoute'
import Home from './Components/Home'


function App() {
  const [data,setData]=useState()
  const LoginHandler =(value)=>{
    setData(value)
  }

  return (
    <div className="App">
       <Navbar data={data} />
      <Routes>
      <Route element={<PrivateRoute />}> 
      <Route path="/" element={<Home />} />
      </Route>
        <Route path="/Login" element={<Login LoginHandler={LoginHandler} />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    
    </div>
  );
}

export default App;
