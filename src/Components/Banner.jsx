import React from 'react'
import cv from "../file/George_Godslove.pdf"

const Banner = () => {
  return (
    <div id="home" className="banner_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center text-md-start">
                    <h6>WELCOME TO MY WORLD</h6>
                    <h1>I'm George Godslove <br /> A Self-taught <i className="fas fa-laptop-code fa-fw"></i> <br /><span>SOFTWARE Engineer.</span><br />based in Web Engineering</h1>
                    <div className="mt-4">
                        <a href={cv} download="george_godslove.pdf" className="main-btn"> <img src={cv} alt="" className="" /> Preview my CV </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Banner
