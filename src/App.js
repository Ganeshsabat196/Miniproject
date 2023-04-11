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
      <Route path='/'  element={<Base props={{login,setlogin}}/>} ></Route>
      <Route path='/test' element={<Test props={{login,setlogin}}/>} ></Route>
      <Route path='/result'  element={<Result props={{login,setlogin}}/>} ></Route>
      <Route path='/signin'  element={<Login props={{login,setlogin}}/>} ></Route>
      <Route path='/signup'  element={<Createsignup props={{login,setlogin}}/>} ></Route>
      <Route path='/contact'  element={<ContactForm props={{login,setlogin}}/>} ></Route>
      <Route path='/profile'  element={<Proflie props={{login,setlogin}}/>} ></Route>
      <Route path='/header'  element={<Header props={{login,setlogin}}/>} ></Route>
      <Route path='/stats'  element={<Render />} ></Route>
      

    </Routes>

  </>
  );
}

export default App;
