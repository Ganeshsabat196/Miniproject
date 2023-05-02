import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Base from "./Components/Base";
import Result from './Components/Result';
import Test from "./Components/Test";
import Login from './security/Login';
import Createsignup from './security/Createsignup';
import ContactForm from './Components/ContactForm'
import Proflie from './Components/Proflie';
import { useEffect } from 'react';
import Header from './Base/Header';

function App() {
  const [login,setlogin]= useState(false);
  useEffect(()=>{
    console.log("login value",login );
  },[login])
  return (
    <>

    <Routes>
      <Route path='/'  element={<Base  />} ></Route>
      <Route path='/test' element={<Test  />} ></Route>
      <Route path='/result'  element={<Result  />} ></Route>
      <Route path='/signin'  element={<Login  />} ></Route>
      <Route path='/signup'  element={<Createsignup  />} ></Route>
      <Route path='/contact'  element={<ContactForm  />} ></Route>
      <Route path='/profile'  element={<Proflie  />} ></Route>
      <Route path='/header'  element={<Header  />} ></Route>
      <Route path='/stats'  element={<profile />} ></Route>
      

    </Routes>

  </>
  );
}

export default App;
