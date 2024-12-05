import React, { useRef, useState, useEffect } from "react";
import { gsap } from 'gsap';
import * as THREE from 'three';
import { TextPlugin } from 'gsap/TextPlugin';
import { Asterisk, ArrowDown } from 'lucide-react';
//Assets
import myImg from "../../assets/jb-hey.png";
//Components
import ProjectSection from "../../pages/Home/ProjectSection";


interface IHome {

}


const Home: React.FC<IHome> = (props) => {

	const [thumbHover, setThumHover] = useState(false);
	const toggleHover = () => setThumHover(!thumbHover);

	const targetDivRef = useRef<HTMLDivElement>(null);
	const marqueeRef = useRef<HTMLDivElement>(null);
	const textRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(TextPlugin);

		const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: 1 });

		tl.to(textRef.current, { duration: 1, delay: 1, text: "Developer", ease: "power2.inOut", color: "#ff8709" })
			.to(textRef.current, { duration: 1, delay: 1 });

	}, []);

	useEffect(() => {
		if (marqueeRef.current) {
		  const marqueeContent = marqueeRef.current.querySelector('.marquee__content');
	
		  if (marqueeContent) {
			gsap.to(marqueeContent, {
			  x: '-101%', 
			  duration: 20, 
			  ease: 'linear', 
			  repeat: -1, 
			});
		  }
		}
	  }, []);

	const handleClick = () => {
		if (targetDivRef.current) {
			targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};


	return (
		<div className="home-page">
			<div className="banner-area" >
				<div className="banner-wrapper">
					<div className="banner-text">
						<h1><span>Hey I'm <label>Jithin Bose</label></span>Product</h1>
						<h1>
							<div className="scram-text" ref={textRef}>Designer</div>
							<div className="description">
								<span>Designing intuitive and engaging</span>
								<span>digital experiences. Currently working</span>
								<span>on next gen real estate investment</span>
								<span>products at SponsorCloud</span>
							</div>
						</h1>
					</div>
				</div>
				<div className="scroll-arrow">
					<div className="arrow">
						<ArrowDown onClick={handleClick} strokeWidth={1} />
					</div>
				</div>
			</div >
			<div className="marquee-sec" ref={marqueeRef}>
				<div className="marquee__inner">
					<div className="marquee__content">
						<h3>Product Design</h3>
						<div className="star-svg"><Asterisk color="#FFF" /></div>
						<h3>UX Design</h3>
						<div className="star-svg"><Asterisk color="#FFF" /></div>
						<h3>UI Design</h3> 
						<div className="star-svg"><Asterisk color="#FFF" /></div>
						<h3>Front-End Dev</h3> 
						<div className="star-svg"><Asterisk color="#FFF" /></div>
						<h3>React Js</h3> 
						<div className="star-svg"><Asterisk color="#FFF" /></div>
						<h3>10+ Year Experience</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;