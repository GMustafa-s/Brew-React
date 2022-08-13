import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import "../Header/Header.css";
import "../Responsive/Resposive.css";
import logo from "../../Images/Header/logo.png";
import logoo from "../../Images/Header/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
// import { StickyContainer, Sticky } from 'react-sticky';
// import {Helmet} from "react-helmet";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className="header" id="myHeader">
        <nav className="mobile-nav">
          <div className="navigation">
            <img src={logoo} alt="" />
            <span onClick={() => setIsActive(!isActive)}>
              <AiOutlineMenu />
            </span>
          </div>
          <div className="mobile-menu">
          {isActive && <ul>
              <li>Home</li>
              <li>Service</li>
              <li>Contact</li>
              <li>About</li>
            </ul>}
          </div>
        </nav>

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

        {/* <StickyContainer> */}
        {/* <Sticky> */}

        <div className="container header-container">
          <img src={logo} alt="Header logox " className="header-logo hidee" />
          <div className="hidee">
            <ul className="menu-ul">
              <li className="menu-list">
                <a href="#home">Home</a>
              </li>
              <li className="menu-list">
                <a href="#services">Services</a>
              </li>
              <li className="menu-list">
                <a href="#get-app">Get App</a>
              </li>
              <li className="menu-list">
                <a href="#how-it-works">How it works</a>
              </li>
              <li className="menu-list">
                <a href="#testmonial">Testmonials</a>
              </li>
            </ul>
          </div>
          <button className="btn header-btn hidee">Download App</button>
        </div>

        {/* </Sticky> */}
        {/* </StickyContainer> */}
      </header>
    </>
  );
};

export default Header;
