import React, { useState } from "react";
//Components
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Lottie from "react-lottie";

//Assets
import myPic from "../assets/sticker.png";
import zlinkBanner from "../assets/Projects/zlinklogo/zlink-banner.png";
//Lottile
import * as animationData from '../lotties/scroll.json'



interface IHome {

}

const Home: React.FC<IHome> = (props) => {

	const [thumbHover, setThumHover] = useState(false);
	const toggleHover = () => setThumHover(!thumbHover);

	return (
		<>
			<div className="banner-area">
				<div className="banner-text">
					<img className="my-pic" src={myPic} />
					<h1>Hey I'm <span>Jithin Bose</span>, Product Designer.</h1>
					<h1>I enjoy creating user-centric, delightful,</h1>
					<h1>and human experiences.</h1>
				</div>
				<div className="scroll-line">
					<iframe src="https://lottie.host/embed/53ec38da-00c5-498f-ae78-1604a392a658/56Awl8uHKj.json"></iframe>
					{/* <span className="hscroll-line"></span> */}
				</div>
			</div >
			<div className="projects-area">
				<div className="title">
					<h2>Discover some of my works</h2>
					<div className="more"><span className="underline anime-cursor">See all works</span></div>
				</div>
				<div className="project-list__wrap">
					<div className="project-list">
						<div className="project-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
							<h4>How I designed a e-commerce website- a UX case study</h4>
							<h5>UI /UX / Branding</h5>
							<iframe className="arrow-up" src="https://lottie.host/embed/a94ceb5c-f2bc-4a88-8f78-8b0be666f52f/c2IAclmqMI.json"></iframe>
						</div>
						<div className="project-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
							<h4>Rebranding zLink</h4>
							<h5>Branding / Visual Design</h5>
							<iframe className="arrow-up" src="https://lottie.host/embed/a94ceb5c-f2bc-4a88-8f78-8b0be666f52f/c2IAclmqMI.json"></iframe>
						</div>
						<div className="project-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
							<h4>Rebranding zLink</h4>
							<h5>Branding / Visual Design</h5>
							<iframe className="arrow-up" src="https://lottie.host/embed/a94ceb5c-f2bc-4a88-8f78-8b0be666f52f/c2IAclmqMI.json"></iframe>
						</div>
						<div className="project-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
							<h4>Rebranding zLink</h4>
							<h5>Branding / Visual Design</h5>
							<iframe className="arrow-up" src="https://lottie.host/embed/a94ceb5c-f2bc-4a88-8f78-8b0be666f52f/c2IAclmqMI.json"></iframe>
						</div>
					</div>
					<div className={thumbHover ? 'project-thumbnail animated-thumb' : 'project-thumbnail'}>
						<div className="background-color"></div>
						<div className="background-img" style={{ backgroundImage: `url(${zlinkBanner})` }}></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;