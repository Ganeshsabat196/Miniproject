import React, { useEffect, useState } from 'react'
import { addcontact } from './Api/api'
const ContactForm = () => {

  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    // setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

  return (
    <div className="container mt-5" style={{width:"50%",border:"1px solid",padding:"20px",borderRadius:"20px"}}>
      <h2 className="mb-5 text-center">Contact us</h2>
      <form onSubmit={onSubmit} style={{padding:"20px"}}>
        <div className="mb-3" >
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required style={{border:"1px solid",borderRadius:"10px",padding:"8px"}}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required style={{border:"1px solid",borderRadius:"10px",padding:"8px"}}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required style={{border:"1px solid",borderRadius:"10px",padding:"8px"}}/>
        </div>
        <button className="btn btn-danger" type="submit" onClick={async()=>{
          let f1=document.getElementById("name").value
          let f2=document.getElementById("email").value
          let f3=document.getElementById("message").value
          let obj={f1,f2,f3}
          // setFormdata(obj)
          console.log(obj);
         addcontact(obj)  

        }}>
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm