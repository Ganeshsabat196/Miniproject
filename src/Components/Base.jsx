import React from 'react'
import Header from "../Base/Header";
import Footer from "../Base/Footer";
import Home from "./Home";

export default function Base() {
  return (
    <>
      <div id="body">
          <div className="layout bright-theme">
            <Header />
            <Home />
            <Footer/>
          </div>
      </div>

    </>
  )
}
