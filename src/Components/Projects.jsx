import React from 'react'
import img1 from "../image/img1.png"
import img2 from "../image/img2.png"
import img3 from "../image/img3.png"
import img4 from "../image/img4.png"
import img5 from "../image/img5.png"
import img6 from "../image/img6.png"
import img7 from "../image/img7.png"
import img8 from "../image/img8.png"

const AllProjects = [
    {
        title: 'GeoTravel',
        image: img6,
        subtitle: 'Book Flights around the world from your smart phone, plan vaccations with family and friends, lock in business trips seamlessly, visa application to any country around the globe (Redux toolkit was used to store states globally)',
        githuburl: 'https://github.com/slovetechnology/geotravel',
        link: 'https://gowithgeo.com/',
        techs: [
            {
                color: ['bg-warning', 'text-warning'],
                content: 'Javascript'
            },
            {
                color: ['bg-info', 'text-info'],
                content: 'css/Tailwind Css'
            },
            {
                color: ['bg-lightgreen', 'text-lightgreen'],
                content: 'reactjs / Redux Toolkit'
            },
        ]
    },
    {
        title: 'Cargo Delivery and Tracking Service',
        image: img8,
        subtitle: `Global logistics and transportation services via sea, land and air. We will protect you from risk and liabilities`,
        githuburl: 'https://github.com/slovetechnology/mytrackways-front',
        link: 'https://mytrackways.com/',
        techs: [
            {
                color: ['bg-warning', 'text-warning'],
                content: 'Javascript'
            },
            {
                color: ['bg-info', 'text-info'],
                content: 'css/Tailwind Css'
            },
            {
                color: ['bg-lightgreen', 'text-lightgreen'],
                content: 'reactjs / Redux Toolkit'
            },
        ]
    },
    {
        title: 'E-Commerce Stationery',
        image: img7,
        subtitle: `Direct Sales contact integrated, Direct Product Enquiry, Order on Sight (Redux toolkit was used to store states globally)`,
        githuburl: 'https://github.com/slovetechnology/kekedumfront',
        link: 'https://kekedum.com/',
        techs: [
            {
                color: ['bg-warning', 'text-warning'],
                content: 'Javascript'
            },
            {
                color: ['bg-info', 'text-info'],
                content: 'css/Tailwind Css'
            },
            {
                color: ['bg-lightgreen', 'text-lightgreen'],
                content: 'reactjs / Redux Toolkit'
            },
        ]
    },
    {
        title: 'FaceBook Ui Clone',
        image: img1,
        subtitle: `This is a facebook developers user interface only with no backend attached, amongst others, this UI is built with reactjs, and it's neccessary libraries (Redux toolkit was used to store states globally)`,
        githuburl: 'https://github.com/slovetechnology/reactfb',
        link: 'https://reactfb.netlify.app',
        techs: [
            {
                color: ['bg-warning', 'text-warning'],
                content: 'html'
            },
            {
                color: ['bg-info', 'text-info'],
                content: 'css/bootstrap Css'
            },
            {
                color: ['bg-lightgreen', 'text-lightgreen'],
                content: 'javascript / reactjs'
            },
        ]
    },
    {
        title: 'Ecommerce Ui Clone',
        image: img3,
        subtitle: `This is a simple online store user interface only with no backend attached, amongst others, this UI is built with reactjs, and it's neccessary libraries,`,
        githuburl: 'https://github.com/slovetechnology/reactecoms',
        link: 'https://reactecoms.netlify.app/',
        techs: [
            {
                color: ['bg-warning', 'text-warning'],
                content: 'html'
            },
            {
                color: ['bg-info', 'text-info'],
                content: 'css/bootstrap Css'
            },
            {
                color: ['bg-lightgreen', 'text-lightgreen'],
                content: 'javascript / reactjs'
            },
        ]
    },
    {
        title: 'Photogenic View',
        image: img2,
        subtitle: `This is an online beauty peagant platform, built with core laravel, livewire, ajax and bootstrap, it accepts payment for voting and purchasing of registration integrated with flutterwave payment gateway`,
        githuburl: 'https://github.com/slovetechnology/photogenicApp',
        link: 'https://www.photogenicview.com/',
        techs: [
            {
                color: ['bg-warning', 'text-warning'],
                content: 'html'
            },
            {
                color: ['bg-info', 'text-info'],
                content: 'css/bootstrap Css'
            },
            {
                color: ['bg-lightgreen', 'text-lightgreen'],
                content: 'php / laravel / livewire'
            },
            {
                color: ['bg-white', 'text-white'],
                content: 'javascript / ajax'
            },
        ]
    },
    {
        title: 'Smesi NGO Website',
        image: img4,
        subtitle: `This Website was built on contract and its a non-governmental organizational website with the sole aim to assist the government eradicate and reduce high rate of poverty and help the less previlleged masses`,
        githuburl: null,
        link: 'https://smesitiveng.com/',
        techs: [
            {
                color: ['bg-warning', 'text-warning'],
                content: 'html'
            },
            {
                color: ['bg-info', 'text-info'],
                content: 'css/bootstrap Css'
            },
            {
                color: ['bg-lightgreen', 'text-lightgreen'],
                content: 'php / laravel / livewire'
            },
            {
                color: ['bg-white', 'text-white'],
                content: 'javascript / ajax'
            },
        ]
    },
    {
        title: 'Cryptosville',
        image: img5,
        subtitle: `This project was built to test my skills in finance technologies especially in the crypto currency industry`,
        githuburl: null,
        link: 'https://cryptosville.org/',
        techs: [
            {
                color: ['bg-warning', 'text-warning'],
                content: 'html'
            },
            {
                color: ['bg-info', 'text-info'],
                content: 'css/bootstrap Css'
            },
            {
                color: ['bg-lightgreen', 'text-lightgreen'],
                content: 'php / laravel / livewire'
            },
            {
                color: ['bg-white', 'text-white'],
                content: 'javascript / ajax / jquery'
            },
        ]
    },
]

const Projects = () => {
    return (
    <div>
            {AllProjects.map((project, index) => {
                return (
                    <div key={index} className={`${(index % 2 === 0) ? '' : 'flex-row-reverse'} row mb-5`}>
                        <div className="col-lg-6">
                            <img src={project.image} alt="" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="fw-semibold fs-2 sidetitle text-light position-relative py-2 mb-4 pt-4">{project.title}</div>
                            <div className="text-light mb-3">{project.subtitle}</div>
                            <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                                {project.techs.map((item, i) => (
                                <div className="d-flex align-items-center gap-1" key={i}>
                                    <div className={`smalldot ${item.color[0]}`}></div>
                                    <div className={`smalltext ${item.color[1]} text-uppercase`}>{item.content}</div>
                                </div>
                                ))}
                            </div>
                            <div className="d-flex align-items-center gap-4">
                                <a href={`${project.link}`} rel="noreferrer" target="_blank" className='btn btn-outline-light text-capitalize'>preview project</a>
                               {project.githuburl && <a href={`${project.githuburl}`} target="_blank" rel="noreferrer" className='btn btn-outline-light text-capitalize'>view code</a>}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects

// row mb-5 flex-row-reverse