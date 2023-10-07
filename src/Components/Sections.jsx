import React from 'react'
import { Link } from 'react-router-dom'
import about1 from "../image/about1.jpg"
import about2 from "../image/about2.jpg"
import Projects from './Projects'

const Sections = () => {
    return (
        <div>
            {/* about section */}
            <section id="about" className="about_wrapper">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0 text-center">
                            <img src={about1} className="imgd rounded-3" alt="About-Us" />
                        </div>
                        <div className="col-lg-7 ps-lg-5 text-center text-lg-start">
                            <div className="my-3 mb-lg-0">

                                <span className="subtitle">My About Details</span>
                                <h2>About Me</h2>
                                <p>A motivated, adaptable and responsible personnel with the drive to harness the power of information technology in order to utilize the professional and technical skills developed through past work experience. Possessing a methodical, customer-focus approach to work and a strong drive to see things through to completion. </p>
                            </div>

                            <div className="pt-4">
                                <ul className="nav nav-pills justify-content-center justify-content-lg-between mb-3" id="pills-tab" role="tablist">

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill" aria-selected="true">Professional Skills</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-experiance-tab" data-bs-toggle="pill" data-bs-target="#pills-experiance" type="button" role="tab" aria-controls="pills-experiance" aria-selected="false">Experience</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education" type="button" role="tab" aria-controls="pills-experiance" aria-selected="false">Education</button>
                                    </li>

                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab">
                                        <div className="single-progress">
                                            <h6>Reactjs Frontend (Core Strenght)</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="label">85%</span>
                                        </div>
                                        <div className="single-progress">
                                            <h6>Nodejs/Expressjs, MongoDB, Sequelize, sql</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="label">60%</span>
                                        </div>
                                        <div className="single-progress">
                                            <h6>Html, Css, Tailwindcss, Bootstrap, Es6 and Latest</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "97%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="label">97%</span>
                                        </div>
                                        <div className="single-progress">
                                            <h6>Restful Api, node package manager</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "97%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="label">97%</span>
                                        </div>
                                        <div className="single-progress">
                                            <h6> team leader, team builder, product manager</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "97%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="label">97%</span>
                                        </div>
                                        <div className="single-progress">
                                            <h6>React Native Mobile</h6>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="label">60%</span>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="pills-experiance" role="tabpanel" aria-labelledby="pills-experiance-tab">
                                        <ul className="text-start ps-0">
                                            <li>
                                                <Link to="#">
                                                    Snr. Front-end Engineer <span>- Reactjs</span>
                                                </Link> 2019 - Current
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Mid. Backend Engineer <span>- NodeJs/ExpressJs</span>
                                                </Link> 2021 - Current
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Jr. Frontend Engineer <span>- React Native</span>
                                                </Link> 2022 - Current
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                                        <ul className="text-start ps-0">
                                            <li>
                                                <Link to="#">
                                                    Diploma in Computer Science<span>
                                                        - Federal Polytechnic Oko, Anambra State, Nigeria
                                                    </span>
                                                </Link>
                                                2019 - 2021
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    Endorsement of Completion in Frontend (ReactJs) <span>
                                                        - Freecode Camp
                                                    </span>
                                                </Link>
                                                2022
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* portfolio section */}
            <section id="portfolio" className="portfolio_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center mb-4">
                            <span className="subtitle">My Complete Project</span>
                            <h2>My Featured Project</h2>
                            <p>I do most of my work under contract but I tend to freelance from time to time or build projects for fun.<br className="d-none d-md-block" /> Here are some of my most recent commercial projects:</p>
                        </div>
                    </div>
                    <Projects />
                </div>
            </section>
            {/* contact section */}
            <section id="contact" className="contact_wrapper">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 order-lg-1 pe-lg-5 text-lg-start text-center">
                            <span className="subtitle">My Complete project</span>
                            <h2>Hire Me.</h2>
                            <div className="row call_details mb-4">
                                <label className="col-sm-3 col-lg-4">
                                    Call us directly:
                                </label>
                                <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                                    <Link to="">+234 7089938649, +234 7015582135</Link>
                                </div>

                                <label className="col-sm-3 col-lg-4"> Contact Email:</label>

                                <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                                    <a href="mailto:slovetech619@gmail.com">slovetech619@gmail.com</a>
                                </div>
                            </div>

                            <form action="">
                                <div className="mb-4">
                                    <input type="text" className="form-control" placeholder="Your Name..." />
                                </div>

                                <div className="mb-4">
                                    <input type="number" className="form-control" placeholder="Your Phone..." />
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control" placeholder="Your Email..." />
                                </div>
                                <div className="mb-4">
                                    <textarea name="" id="message" cols="40" className="form-control" placeholder="Write a Message...">
                                    </textarea>
                                </div>
                                <div className="text-end text-lightgreen">Forms is disabled for the mean time</div>
                                <button className="main-btn" type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-6 order-1 mb-4 order-lg-1 mb-lg-0 text-center">
                            <img src={about2} alt="" className="imgd rounded-3" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sections
