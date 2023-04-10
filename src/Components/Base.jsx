import React from 'react'
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Home from "./Home";

export default function Base(props) {
  console.log("here1",props.props.login);
  return (
    <>
      <div id="body">
          <div className="layout bright-theme">
            <Header props={props.props.login}/>
            <Home />
            <Footer />
          </div>
      </div>
    </>
   
  )
}
