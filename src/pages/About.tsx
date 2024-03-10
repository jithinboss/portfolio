import React from "react";
//Components
import { Container, Row, Col } from "react-bootstrap";
//Assets
// import ProfilePic from "../src/assets/pic-bitmoji.png"
// import ProfilePic_Trans from "../src/assets/pic-bitmoji_white.png"
// import HiImg from "../src/assets/hi_img.png"
import BitEmoji from "../assets/sticker.png"
import BitEmoji_w from "../assets/pic-bitmoji_white.png";
//Icons
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

interface IAbout {

}

const About: React.FC<IAbout> = (props) => {
	return (
		<div className="about-page">
			<Container>
				<header className='inner-page'>
					<div className="profile-pic">
						<img src={BitEmoji_w} />
					</div>
					<div className="menu">
						<ul>
							<li><a className="underline">Home</a></li>
							<li><a className="underline">Projects</a></li>
							<li><a className="underline active">About</a></li>
						</ul>
					</div>
				</header>
				<div className="hero-title">
					<h1>Hey I'm <span>Jithin Bose</span></h1>
					<h1>Product Designer at zlink, Inc</h1>
				</div>
				<div className="about-content">
					<p>I am Jithin Bose, a seasoned Lead Product Designer currently contributing my expertise at zLink. With a rich professional journey spanning over a decade, I have actively engaged in the realms of UX/UI design and development, honing my skills across diverse domains, including web and mobile applications, SaaS products, and e-commerce platforms.</p>
					<br />
					<p>In my current role, I lead a dynamic team, focusing on crafting web and mobile applications tailored for Facility Management solutions. My primary goal is to engineer seamless and delightful experiences for our users, ensuring the highest standards of design excellence.</p>
					<br />
					<p>My portfolio boasts the successful design of over 20+ applications, and I have had the privilege of collaborating with esteemed clients such as Emirates, Siemens, Emaar, The First Group, and Sun Life Financial. These experiences have not only sharpened my design acumen but have also provided me with valuable insights into delivering solutions for prominent industry players.</p>
					<br />
					<p>My skill set encompasses a comprehensive range of capabilities, including User-Interface Design, User-Centered Design, Wire-framing, Prototyping, User Research, Information Architecture, Web Design, App Design, Web Development, Branding, and Marketing.</p>
					<br />
					<p>I am proficient in utilizing a variety of design tools, such as Figma, Adobe XD, Sketch, Photoshop, Illustrator, InDesign, and Lightroom, which enables me to bring concepts to life with precision and creativity.</p>
					<br />
					<p>On the technological front, I am well-versed in HTML5, CSS3, Sass, Bootstrap, JavaScript, and React JS, keeping abreast of the latest advancements to ensure innovative and up-to-date design solutions.</p>
					<br />
					<p>I am not just passionate about design; I am also enthusiastic about collaboration and networking. If you share the same passion, I welcome the opportunity to connect and explore potential collaborations.</p>
					<br />
					<p>Let's Connect!</p>
				</div>

				<footer>
					<span>© 2023 by Jithin Bose. All rights reserved.</span>
				</footer>
			</Container>
		</div>
	);
}

export default About;