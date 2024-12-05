import React from "react";

import { Link, useLocation } from "react-router-dom";
//Assets
import myImg from "../assets/jb-logo.svg";
import linkedin from "../assets/linkedin.svg";

const Footer: React.FC = () => {

	const path = useLocation().pathname;

	return (
		<div className="footer-wrapper">
			<div className="contact">
				<h6>Let's connect</h6>
				<h5>Looking for a product designer? <br /> Drop me a line.</h5>
				<h5 className="email">jithinboss@gmail.com</h5>
			</div>
			<footer>
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
				<div className="social-links">
					<ul>
						<li><img src={linkedin} /></li>
					</ul>
				</div>
			</footer >
		</div>
	);
};

export default Footer;
