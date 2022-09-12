import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PrivateRoute from './Components/PrivateRoute'
import Home from './Components/Home'


function App() {
  return (
    <div className="App">
       <Navbar />
      <Routes>
      <Route element={<PrivateRoute />}> 
      <Route path="/" element={<Home />} />
      </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    
    </div>
  );
}

export default App;
