import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";
import SearchBar from "./SearchBar";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 15) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  };
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  });

  const changeColor = () => {
    if (window.scrollY >= 15) {
      setHeaderColor(headerColor)
    } else {
      setHeaderColor(headerColor)
    }
  }

  useEffect(() => {
    changeColor()
    window.addEventListener("scroll", changeColor)
  })


  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";


    
    return (
    <ul className={listClassName}>
        <li>
          <NavLink 
            to="/" 
            className={linkClassName} 
            onClick={closeMobileMenu}
            >
              Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./pages/contact"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            // eslint-disable-next-line no-template-curly-in-string
            className={`${linkClassName} ${buttonClassName}`}
            onClick={closeMobileMenu}
          >
            Login
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className={header ? "header color" : "header"}>
    <nav className="nav container">
      <NavLink to="/" className="nav__logo mr-20">
        STREAMIFY
      </NavLink>
      
      <div>
     
      {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (renderNavLinks())}
         
        </div>
        <SearchBar />
              </nav>
    </header>
  );
};

export default NavbarHook;
