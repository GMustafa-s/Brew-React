import React from 'react'
import '../Header/Header.css'
import '../Responsive/Resposive.css'
import logo from '../../Images/Header/logo.png'

const Header = () => {
  return (
    <React.Fragment>

<header className="header" id="myHeader">

      {/* <nav className="show-768">
        <div className="nav-main">
            <div className="nav-header">
              <img
              src="./Assets/Images/Header/full logo.png"
              alt="Header logox "
              className="header-logo"
            />
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <ul className="menu">
              <li className="menu-list"><a href="#home">Home</a></li>
              <li className="menu-list"><a href="#services">Services</a></li>
              <li className="menu-list"><a href="#get-app">Get App</a></li>
              <li className="menu-list"><a href="#how-it-works">How it works</a></li>
              <li className="menu-list"><a href="#testmonial">Testmonials</a></li>
            </ul>
        </div>
      </nav> */}


      <div className="container header-container">
        <img
          src={logo}
          alt="Header logox "
          className="header-logo hidee"
        />
        <div className="hidee">
          <ul className="menu-ul">
            <li className="menu-list"><a href="#home">Home</a></li>
            <li className="menu-list"><a href="#services">Services</a></li>
            <li className="menu-list"><a href="#get-app">Get App</a></li>
            <li className="menu-list"><a href="#how-it-works">How it works</a></li>
            <li className="menu-list"><a href="#testmonial">Testmonials</a></li>
          </ul>
        </div> 
        <button className="btn header-btn hidee">Download App</button>
      </div>
    </header>
    </React.Fragment>
  )
}

export default Header
