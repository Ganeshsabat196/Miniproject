import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Base from "./Components/Base";
import Result from './Components/Result';
import Test from "./Components/Test";
import Login from './security/Login';

function App() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Base />} ></Route>
      <Route path='/test' element={<Test />} ></Route>
      <Route path='/result' element={<Result />} ></Route>
      <Route path='/signin' element={<Login />} ></Route>
    </Routes>

  </>
  );
}

export default App;
