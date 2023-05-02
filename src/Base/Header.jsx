import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
export default function Header(props) {
console.log("props",props);
  // const [login, setlogin] = useState(props.props)
  const [ user, setLoginUser] = useState()
  // const [log,setlog]=useState(false);

  useEffect(() => {
    setLoginUser(localStorage.getItem("MyUser"))
    console.log("hello",user)
    // console.log("hekllo")
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }
  return (
    <>
      <header className="header-area overlay">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Scribble-Word
            </Link>
            <button
              type="button"
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#main-nav"
            >
              <span className="menu-icon-bar" />
              <span className="menu-icon-bar" />
              <span className="menu-icon-bar" />
            </button>
            <div id="main-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link to="/" className="nav-item nav-link active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="nav-item nav-link">
                    Stats
                  </Link>
                </li>
                {/* <li className="dropdown">
              <a href="#" className="nav-item nav-link" data-toggle="dropdown">
                Services
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Dropdown Item 1
                </a>
                <a href="#" className="dropdown-item">
                  Dropdown Item 2
                </a>
                <a href="#" className="dropdown-item">
                  Dropdown Item 3
                </a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-item nav-link" data-toggle="dropdown">
                Portfolio
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Dropdown Item 1
                </a>
                <a href="#" className="dropdown-item">
                  Dropdown Item 2
                </a>
                <a href="#" className="dropdown-item">
                  Dropdown Item 3
                </a>
                <a href="#" className="dropdown-item">
                  Dropdown Item 4
                </a>
                <a href="#" className="dropdown-item">
                  Dropdown Item 5
                </a>
              </div>
            </li> */}
                <li>
                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="padding-right-0" style={{ display: "flex", float: "right", marginTop: "16px" }}>

{/* {console.log(user)} */}
                {user ?<li>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-list-4">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" style={{ padding: "1px" }} href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle" />
                    {/* <i class="fa-solid fa-user fa-xl"></i> */}
                    <i class="fa-solid fa-caret-down fa-lg" style={{marginLeft:'2px'}}></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    <Link className="dropdown-item" onClick={()=>{
                      updateUser(false)
                    }}>logout</Link>
                  </div>
                </li>
              </ul>
            </div>
          </li>:<>
          <li>
            <NavLink
              type="secondary"
              className="styledComponents__Button-sc-1ynpvmz-0 errUJN"
              to="/signup"
              style={{ padding: "8px", paddingLeft: "18px", paddingRight: "18px", marginLeft: "10px", marginRight: "10px", backgroundColor: "transparent", fontWeight:"bolder" }}
            >
              Sign up
            </NavLink>

          </li>
          <li>
            <NavLink
              type="secondary"
              className="styledComponents__Button-sc-1ynpvmz-0 errUJN"
              to="/signin"
              style={{ padding: "8px", paddingLeft: "18px", paddingRight: "18px", marginLeft: "10px", marginRight: "10px",backgroundColor:"transparent",fontWeight:"bolder" }}
            >
              Sign in
            </NavLink>

          </li>
        </>}

              </ul>

            </div>
          </div>
        </nav>

      </header>
      {/* <nav className="navbar navbar-dark bg-dark navbar-expand-sm"> */}



      {/* </nav> */}
    </>

  )
}
