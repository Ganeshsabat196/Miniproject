// import React, { Component } from 'react'
// import "./login.css"
// import { Button } from 'react-bootstrap/lib/InputGroup'
// import Modal from 'react-bootstrap/Modal';
// export default class SignUp extends Component {
//   render() {
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//     return (
//       // <div className="container" style={{ width: "50%", marginTop:"100px",border:"1px solid gray",padding:"20px",borderRadius:"20px"}}>
//       //   <form>
//       //     <h3 style={{
//       //       display: "flex",
//       //       justifyContent: "center"
//       //     }}>Sign Up</h3>
//       //     <div className="mb-3">
//       //       <label>Name</label>
//       //       <input
//       //         type="text"
//       //         className="form-control"
//       //         placeholder="Enter Name"
//       //       />
//       //     </div>
          
          
//       //     <div className="mb-3">
//       //       <label>Password</label>
//       //       <input
//       //         type="password"
//       //         className="form-control"
//       //         placeholder="Enter password"
//       //       />
//       //     </div>
//       //     <div className="d-grid">
//       //       <button type="submit" className="btn btn-primary mt-5" style={{width:"20%",margin:"auto"}}>
//       //         Sign Up
//       //       </button>
//       //     </div>
//       //     <p className="forgot-password center text-right">
//       //       Already registered <a href="/sign-in">sign in?</a>
//       //     </p>
//       //   </form>
//       // </div>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//     )
//   }
// }
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
export default function Login() {
  
  return (
    <>
    <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

        <h2 className="fw-bold mb-2 text-center">Sign in</h2>
        <p className="text-white-50 mb-3">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" style={{border:"1px solid",borderRadius:"10px",padding:"8px"}}/>
        <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" style={{border:"1px solid",borderRadius:"10px",padding:"8px"}}/>

        <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

        <MDBBtn size='lg' disabled={false}>
          Login
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



