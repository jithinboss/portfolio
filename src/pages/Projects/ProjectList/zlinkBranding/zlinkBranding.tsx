import React, { useEffect } from 'react'
//Assets
import banner from "../../../../assets/Projects/zlinklogo/zlink-banner.png";
import mockImageOne from "../../../../assets/Projects/zlinklogo/zlink-mock_1.webp";
import CurrentLogo from "../../../../assets/Projects/zlinklogo/currentlogo.png";
import NewLogo from "../../../../assets/Projects/zlinklogo/newlogo.png";
import NewLogo_1 from "../../../../assets/Projects/zlinklogo/newlogo_wordmark.png";
import colorScheme from "../../../../assets/Projects/zlinklogo/colorscheme.png";
import sampleOptions from "../../../../assets/Projects/zlinklogo/sampleoptions.png";
import fonts from "../../../../assets/Projects/zlinklogo/font.png";

interface IZlinkbranding {

}

const Zlinkbranding: React.FC<IZlinkbranding> = (props) => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])


	return (
		<div className='projects-detail homestyle'>
			<div className='banner'>
				<div className='img-area' style={{ backgroundImage: `url(${mockImageOne})` }}></div>
				<h1>Rebranding zLink</h1>
				<h5>Discover how a strategic logo rebranding transformed zLink's image, enhancing brand identity and market appeal. This case study delves into the process, design evolution, and impact of the new logo on zLink's growth and customer engagement.</h5>
				<span className='date'>22 February 2024</span>
			</div>
			<div className='details'>
				<p>Gone are the days when B2B companies could avoid rebranding, restyling, and redesigning. This case study sheds light on the significance of rebranding for businesses and why it is crucial for any brand's advancement and promotion.</p>
				<p>The online services and B2B platforms market is rapidly expanding. To effectively sell and promote a product online, a visual code is essential. It serves as a form of communication, mirroring the company's positioning, ideology, and brand strategy. This visual code influences how consumers perceive the brand and aids in the digestion of information.</p>
				<p>An outdated design is not benign; it sends a clear message that other aspects of the company are likely just as outdated, from its software to its work processes.</p>
				<p>Refreshing the identity signals that the company actively pursues current market trends and remains relevant in every facet of its business.</p>
				<p>Let's explore the benefits zLink has reaped from its rebranding efforts.</p>
				<img src={mockImageOne}></img>
				<div className='title'>
					<h3>About zLink</h3>
				</div>
				<p>zLink has been providing Facility, Asset, and Maintenance Management Software based on emerging technologies, technical support, and implementation services and solutions for over 20 years. We focus our efforts on innovative solutions based on a new class of software to address the optimal use and management of facilities infrastructure. We offer Integrated Workplace Management Systems (IWMS), Asset Management Systems (AMS), and Computerized Maintenance Management Systems (CMMS) software in the Software-as-a-Service (SaaS) mode where the clients can, without maintaining the hardware and associated costs, take advantage of the software owned and operated by the software provider. In addition, all solutions are also available for On-Premise implementation.</p>
				<div className='title'>
					<h3>Reasons for rebranding</h3>
				</div>
				<p>The expansion and evolution of the brand called for a shift in strategy. The current visual representation no longer aligned with the new strategic direction. The visual identity had become outdated, prompting the need for a fresh brand image imbued with new meanings to resonate with consumers.</p>
				<div className='title'>
					<h3>Brand character</h3>
				</div>
				<p>The expansion and evolution of the brand called for a shift in strategy. The current visual representation no longer aligned with the new strategic direction. The visual identity had become outdated, prompting the need for a fresh brand image imbued with new meanings to resonate with consumers.</p>
				<div className='title'>
					<h3>Current Logo</h3>
				</div>
				<p>The previous style failed to align with the brand's positioning, character, and values. This visual identity did not resonate with the nature of the business, consequently impacting the company's image negatively. The brand design appeared outdated and in need of a refresh.</p>
				<img src={CurrentLogo}></img>
				<div className='title'>
					<h3>New Concept</h3>
				</div>
				<p>One characteristic of B2B businesses is the necessity to cultivate enduring, trustworthy relationships, selecting partners known for their good reputations. This implies that the company itself must exude reliability, positivity, confidence, and stability. Our objective was to craft a visual identity that embodies these qualities.</p>
				<p>The company aimed to showcase its elevated professional standards and utilization of new technologies, requiring a means to communicate these advancements to consumers.</p>
				<p>As part of the company's new strategy, there was a focus on simplifying and expediting methods and processes, ensuring the simplicity and transparency of banking operations.</p>
				<p>A straightforward and minimalist design was chosen to effectively convey these objectives and values, thus forming the foundation of the updated corporate identity.</p>
				<p>Before discarding an outdated design, we meticulously evaluate not only its shortcomings but also its strengths. This approach ensures that we retain anything useful and significant. In this scenario, the old visuals were harmonious and approachable, qualities we aimed to preserve in a new iteration.</p>
				<p>Given the company's existing base of loyal consumers, the rebranding was approached with the intention of maintaining familiarity rather than radically altering the brand image.</p>
				<img src={NewLogo}></img>
				<blockquote>
					<ul>
						<li></li>
						<li>The company's logo features a design resembling a link, symbolizing connection, along with the letter "Z".</li>
						<li></li>
					</ul>
				</blockquote>
				<img src={NewLogo_1}></img>
				<div className='title'>
					<h3>Color palette</h3>
				</div>
				<p>Sass companies often use blues and greens in their identity. These colors are associated with trustworthiness, calm, and reliability. They are inspiring and reassuring.</p>
				<p>The initial corporate palette had many complimentary colors, which added confusion and deprived the visuals of clarity and freshness. We removed the extraneous colors and hues, coming up with a cleaner and more minimalist palette.</p>
				<img src={colorScheme}></img>
				<p>Sample options of using the logo with the corporate palette:</p>
				<img src={sampleOptions}></img>
				<div className='title'>
					<h3>Fonts</h3>
				</div>
				<p>The previous font choice, Source Sans Pro, was deemed bland and overly "soft." To align with a more stringent brand concept, a different typeface was needed. We suggested utilizing the Raleway and Open Sans family.</p>
				<img src={fonts}></img>
				<div className='title'>
					<h3>Visual Element</h3>
				</div>
				<p>Lately, as our brand undergoes changes, I noticed a gap in our identity—a unique factor that sets us apart from other Saas tech brands. The introduction of our new logo presented an opportunity to establish a visual style that harmonizes with it. I experimented with incorporating the geometric lines from our logo into our overall brand aesthetic, and it added a delightful, dynamic dimension to our style.</p>
			</div>
		</div>
	);
}

export default Zlinkbranding; 