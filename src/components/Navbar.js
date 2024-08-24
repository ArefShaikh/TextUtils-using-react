import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar({text = "set title here", aboutText = "About text here", mode, toggleMode}) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
<div className="container-fluid">
  <a className="navbar-brand" href="/">{text}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="/">{aboutText}</a>
      </li> */}
    </ul>
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form> */}
  <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
    <input className="form-check-input"  onClick ={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
  </div>
  </div>
</div>
</nav>
  )
}

Navbar.propTypes = {    
  text: PropTypes.string.isRequired,
  aboutText:PropTypes.string.isRequired
}


// Navbar.defaultProps = {
//   text: "set title here",
//   aboutText: "About text here"
// }

/*
Warning: Navbar: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.


**** To resolve this warning, you can refactor your Navbar component by using default parameters instead of defaultProps. Here's how you can do it:  
function Navbar({ title = 'Default Title' }) {
    return (
        <div>
            {title}
        </div>
    );
}
*/
