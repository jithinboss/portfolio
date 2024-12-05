import React from "react";

import { Link, useLocation } from "react-router-dom";
//Assets
import myImg from "../assets/jb-logo.svg";
import linkedin from "../assets/linkedin.svg";

const Header: React.FC = () => {

	const path = useLocation().pathname;

	return (
		<header className={`${path === '/' ? 'main-page' : 'inner-page'}`}>
			<div className="logo">
				<h6>JB</h6>
			</div>
			<div className="menu">
				<ul>
					<li><Link to="/" className={`underline anime-cursor ${path === '/' ? 'active' : ''}`}>Home</Link></li>
					/
					<li><Link to="/Works" className={`underline anime-cursor ${path === '/Works' ? 'active' : ''}`}>Works</Link></li>
					/
					<li><Link to="/About" className={`underline anime-cursor ${path === '/About' ? 'active' : ''}`}>About</Link></li>
					/
					<li><Link to="/Contacts" className={`underline anime-cursor ${path === '/Contacts' ? 'active' : ''}`}>Contact</Link></li>
				</ul>
			</div >
			{/* <div className="social-links">
				<ul>
					<li><img src={linkedin} /></li>
				</ul>
			</div> */}
		</header >
	);
};

export default Header;
