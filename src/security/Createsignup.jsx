
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { Newuser } from '../Components/Api/api';

export default function Createsignup() {

  const [logbtn, setLogbtn] = useState(true);
  return (
    <>
      <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                <h2 className="fw-bold mb-2 text-center">Sign Up</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='email' type='email' size="lg" style={{ border: "1px solid", borderRadius: "10px", padding: "8px" }} />
                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='password' type='password' size="lg" style={{ border: "1px solid", borderRadius: "10px", padding: "8px" }} />
                <MDBInput wrapperClass='mb-4 w-100' label='Repeat Password' id='rpassword' type='password' size="lg" style={{ border: "1px solid", borderRadius: "10px", padding: "8px" }} />

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' onClick={() => {
                  if (logbtn) {
                    setLogbtn(false)
                  } else {
                    setLogbtn(true)
                  }
                }} />
                
                <MDBBtn size='lg' disabled={logbtn} onClick={()=>{
                  let f1=document.getElementById("email").value;
                  let f2=document.getElementById("password").value;
                  let f3=document.getElementById("rpassword").value;
                  if(f2===f3){
                    let obj={f1,f2}
                    Newuser(obj)
                  }else{
                    alert("Password does not match")
                  }
                }}>
                  SignUp
                </MDBBtn>

                <hr className="my-4" />

                {/* <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
          <MDBIcon fab icon="google" className="mx-2"/>
          Sign in with google
        </MDBBtn>

        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
          <MDBIcon fab icon="facebook-f" className="mx-2"/>
          Sign in with facebook
        </MDBBtn> */}

              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </>
  )
}
