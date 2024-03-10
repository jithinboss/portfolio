import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
//Icons
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
//Assets
import homestyleBanner from "../../assets/Projects/homestyle/banner.png"


export class Projects extends Component {
    render() {
        return (
            <div className="project-page">
                <Container>
                    <div className="hero-title">
                        <h1>Projects</h1>
                    </div>
                    <div className="projects__wrapper">
                        <div className="projects-card__wrapper">
                            <div className="projects-card">
                                <div className="img-area" style={{ backgroundImage: `url(${homestyleBanner})` }}></div>
                                <h4 className="projects-title">How I designed a e-commerce website- a UX case study</h4>
                                <div className="projects-desc">
                                    <p>In this case study, I am going to discuss the process of designing a responsive e-commerce website that allows online shoppers to have a more efficient and error-free experience.
                                    </p>
                                </div>
                                <Link to="/Projects/Homstyle" className="read-more underline">Read More</Link>
                            </div>
                            <div className="projects-card">
                                <div className="img-area"></div>
                                <h4 className="projects-title">Facility Management Application</h4>
                                <div className="projects-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sem condimentum maecenas,
                                        gravida aptent euismod sagittis inceptos volutpat velit pretium donec suspendisse posuere,
                                        curae sociis orci ultricies vitae etiam natoque sodales curabitur.
                                    </p>
                                </div>
                                <a className="read-more underline"><Link to="/Project_2">Read More</Link></a>
                            </div>
                            <div className="projects-card">
                                <div className="img-area"></div>
                                <h4 className="projects-title">Inspection Application</h4>
                                <div className="projects-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sem condimentum maecenas,
                                        gravida aptent euismod sagittis inceptos volutpat velit pretium donec suspendisse posuere,
                                        curae sociis orci ultricies vitae etiam natoque sodales curabitur.
                                    </p>
                                </div>
                                <a className="read-more underline"><Link to="/Project_3">Read More</Link></a>
                            </div>
                            <div className="projects-card">
                                <div className="img-area"></div>
                                <h4 className="projects-title">Inspection Application</h4>
                                <div className="projects-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sem condimentum maecenas,
                                        gravida aptent euismod sagittis inceptos volutpat velit pretium donec suspendisse posuere,
                                        curae sociis orci ultricies vitae etiam natoque sodales curabitur.
                                    </p>
                                </div>
                                <a className="read-more underline"><Link to="/Project_4">Read More</Link></a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-sec">
                        <ul>
                            <li>
                                <a><MdEmail />Contact Me</a>
                            </li>
                            <li>
                                <a><FaLinkedin />Linkedin</a>
                            </li>
                            <li>
                                <a><FaBehance />Behance</a>
                            </li>
                            <li>
                                <a><FiInstagram />Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <footer>
                        <span>© 2023 by Jithin Bose. All rights reserved.</span>
                    </footer>
                </Container>
            </div>
        )
    }
}

export default Projects