import React, { useRef, useState, useEffect } from "react";
//Assets
import myPic from "../assets/sticker.png";
import zlinkBanner from "../assets/Projects/zlinklogo/zlink-banner.png";
import myImg from "../assets/jb-hey.png";

interface IHome {

}

// interface ScrollToDivProps {
//   scrollToId: string;
// }

const Home: React.FC<IHome> = (props) => {

	const [thumbHover, setThumHover] = useState(false);
	const toggleHover = () => setThumHover(!thumbHover);
	
	const targetDivRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		if (targetDivRef.current) {
		targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	  


	return (
		<div className="home-page">
			<div className="banner-area">
				{/* <div className="gradient-banner"></div> */}
				<div className="banner-wrapper">
					<div className="banner-text">
						{/* <img className="my-pic" src={myPic} /> */}
						<h2>Hey I'm, <span>Jithin Bose</span> !</h2>
						<h2>A <span className="glitch-animation" title="Product Designer">Product Designer</span>.</h2>
						<div className="banner-caption">
							<h6>Designing intuitive and engaging digital experiences.</h6>
							<h6>Currently working on next-gen real estate investment</h6>
							<h6>products at <span className="grad">SponsorCloud</span>.</h6>
						</div>
					</div>
					<div className="jb-avatar">
						<div className="image-wrapper">
							<img src={myImg} />
						</div>
					</div>
				</div>
				<div className="scroll-line" onClick={handleClick} >
					<div className="mouse_scroll">
						<div className="mouse">
							<div className="wheel"></div>
						</div>
						<div>
							<span className="m_scroll_arrows unu"></span>
							<span className="m_scroll_arrows doi"></span>
							<span className="m_scroll_arrows trei"></span>
						</div>
					</div>
					{/* <iframe src="https://lottie.host/embed/53ec38da-00c5-498f-ae78-1604a392a658/56Awl8uHKj.json"></iframe> */}
				</div>
			</div >
			<div className="projects-area" ref={targetDivRef}>
				<div className="title">
					<h4>Discover some of my works</h4>
					<div className="more"><span className="underline anime-cursor">See all works</span></div>
				</div>
				<div className="project-list__wrap">
					<div className="project-list">
						<div className="project-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
							<h5>How I designed a e-commerce website- a UX case study</h5>
							<span>UI /UX / Branding</span>
							<iframe className="arrow-up" src="https://lottie.host/embed/a94ceb5c-f2bc-4a88-8f78-8b0be666f52f/c2IAclmqMI.json"></iframe>
						</div>
						<div className="project-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
							<h5>Rebranding zLink</h5>
							<span>Branding / Visual Design</span>
							<iframe className="arrow-up" src="https://lottie.host/embed/a94ceb5c-f2bc-4a88-8f78-8b0be666f52f/c2IAclmqMI.json"></iframe>
						</div>
						<div className="project-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
							<h5>Rebranding zLink</h5>
							<span>Branding / Visual Design</span>
							<iframe className="arrow-up" src="https://lottie.host/embed/a94ceb5c-f2bc-4a88-8f78-8b0be666f52f/c2IAclmqMI.json"></iframe>
						</div>
						<div className="project-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
							<h5>Rebranding zLink</h5>
							<span>Branding / Visual Design</span>
							<iframe className="arrow-up" src="https://lottie.host/embed/a94ceb5c-f2bc-4a88-8f78-8b0be666f52f/c2IAclmqMI.json"></iframe>
						</div>
					</div>
					<div className={thumbHover ? 'project-thumbnail animated-thumb' : 'project-thumbnail'}>
						<div className="background-color"></div>
						<div className="background-img" style={{ backgroundImage: `url(${zlinkBanner})` }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;