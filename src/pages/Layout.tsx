import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route, Link, useRoutes, useLocation } from "react-router-dom";
//pages
// import About from './About';
import Home from './Home';
// import Homstyle from './Projects/ProjectList/Homstyle/Homstyle';
// import Zlinkbranding from './Projects/ProjectList/zlinkBranding/zlinkBranding';
// import Project_3 from './Projects/ProjectList/Project_3';
// import Project_4 from './Projects/ProjectList/Project_4';
// import Projects from './Projects/Projects';
//Assets
import myImg from "../assets/jb-logo.svg";

const Layout = () => {
    return (
        <div className="home-page">
            <Header />
            <Routes>
                <Route index path="/" element={<Home />} />
                {/* <Route path="/Projects" element={<Projects />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Projects/Homstyle" element={<Homstyle />} />
                    <Route path="/Projects/zLinkBranding" element={<Zlinkbranding />} />
                    <Route path="/Project_3" element={<Project_3 />} />
                    <Route path="/Project_4" element={<Project_4 />} /> */}
            </Routes>
            <Footer />
        </div>
    )
}

export default Layout




const Header = () => {
    const path = useLocation().pathname;
    return (
        <header className={`${path === '/' ? 'main-page' : 'inner-page'}`}>
            {/* {path === '/' ?
                null
                : <div className="profile-pic">
                    <img src={myImg} />
                </div>
            } */}
            <div className="profile-pic">
                <img src={myImg} />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/" className={`underline anime-cursor ${path === '/' ? 'active' : ''}`}>HOME</Link></li >
                    <li><Link to="/Projects" className={`underline anime-cursor ${path === '/Projects' ? 'active' : ''}`}>MY WORKS</Link></li>
                    <li><Link to="/About" className={`underline anime-cursor ${path === '/About' ? 'active' : ''}`}>ABOUT</Link></li>
                </ul >
            </div >
        </header >
    )
}

const Footer = () => {
    return (
        <footer>
            <span>© 2023 by Jithin Bose. All rights reserved.</span>
        </footer>
    )
}