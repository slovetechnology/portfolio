import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../image/logo.png"

const Footer = () => {
  return (
    <section id="contact" className="footer_wrapper mt-3 mt-md-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <div className="footer-logo mb-3 mb-md-0">
              <img src={'https://res.cloudinary.com/dscn7bqto/image/upload/v1708675012/logo_d6hne8.png'} alt="" className="img-fluid logo" />
            </div>
          </div>
    
          
          <div className=" social-icon col-lg-4 col-md-6">
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-end">
    
                  <li>
                    <a href="https://wa.me/+2347089938649" target="_blank" rel='noreferrer'> <i className="fab fa-whatsapp"></i> </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/godslove.george.37" target="_blank" rel='noreferrer'> <i className="fab fa-facebook-f"></i> </a>
                  </li>
                  <li>
                    <a href="https://github.com/slovetechnology" target="_blank" rel='noreferrer'> <i className="fab fa-github"></i> </a>
                  </li>
                  <li>
                    <a href="https://github.com/slovetechnology" target="_blank" rel='noreferrer'> <i className="fab fa-linkedin"></i> </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/slovetech?s=09" target="_blank" rel='noreferrer'> <i className="fab fa-twitter"></i> </a>
                  </li>
                </ul>
          </div>
        
    <div className="col-lg-4 col-md-12">
      <div className="copyright-text text-lg-start text-center mb-3 mb-lg-0">
        <p className="mb-0">Copyright 2022 <Link to="">Code4education</Link> All Rights Reserved. </p>
      </div>
    </div>
    
        </div>
      </div>
    </section>
  )
}

export default Footer
