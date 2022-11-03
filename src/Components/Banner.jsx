import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div id="home" className="banner_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center text-md-start">
                    <h6>WELCOME TO MY WORLD</h6>
                    <h1>I'm George Godslove <br /> A Self-taught <i className="fas fa-laptop-code fa-fw"></i> <br /><span>SOFTWARE Engineer.</span><br />based in Frontend</h1>
                    <div className="mt-4">
                        <Link to="" download="" className="main-btn">Download PROPOSAL</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Banner
