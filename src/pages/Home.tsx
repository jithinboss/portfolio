import React from "react";
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
					<span className="hscroll-line"></span>
				</div>
			</div >
			<div className="projects-area">
				<div className="title">
					<h2>Discover some of my works</h2>
					<div className="more"><span className="underline anime-cursor">See all works</span></div>
				</div>
				<div className="project-list__wrap">
					<div className="project-list">
						<div className="project-item">
							<h3>How I designed a e-commerce website- a UX case study</h3>
							<h5>UI /UX / Branding</h5>
						</div>
						<div className="project-item">
							<h3>Rebranding zLink</h3>
							<h5>Branding / Visual Design</h5>
						</div>
						<div className="project-item">
							<h3>Rebranding zLink</h3>
							<h5>Branding / Visual Design</h5>
						</div>
						<div className="project-item">
							<h3>Rebranding zLink</h3>
							<h5>Branding / Visual Design</h5>
						</div>
					</div>
					<div className="project-thumbnail" style={{ backgroundImage: `url(${zlinkBanner})` }}></div>
				</div>
			</div>
		</>
	);
}

export default Home;