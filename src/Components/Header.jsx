import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../image/logo.png"

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const [link, setLink] = useState('home')
  
  window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  return (
    <header className="header_wrapper">
        <nav className={`navbar navbar-expand-lg fixed-top ${navbar ? 'header-scrolled' : ''}`}>
            <div className="container">
              <Link className="navbar-brand" to="#">
                <img src={'https://res.cloudinary.com/dscn7bqto/image/upload/v1708675012/logo_d6hne8.png'} className="img-fluid logo" alt="logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                
                <i className="fas fa-stream navbar-toggler-icon"></i>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav menu-navbar-nav">
                  <li className="nav-item">
                    <a className={`nav-link ${link === 'home' ? 'active' : ''}`} onClick={() => setLink('home')} aria-current="page" href="#home">Home</a>   
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${link === 'about' ? 'active' : ''}`} onClick={() => setLink('about')} href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${link === 'services' ? 'active' : ''}`} onClick={() => setLink('services')} href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${link === 'port' ? 'active' : ''}`} onClick={() => setLink('port')} href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${link === 'contact' ? 'active' : ''}`} onClick={() => setLink('contact')} href="#contact">Contact</a>
                  </li>
                  <li className="nav-item mt-3 mt-lg-0">
                    <a className="main-btn" href="#contact">Contact me</a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
    </header>
  )
}

export default Header
