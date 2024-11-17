import React, { useEffect } from 'react'
//Assets
import homestyleBanner from "../../../../assets/Projects/homestyle/banner.png"

interface IHomstyle {

}

const Homstyle: React.FC<IHomstyle> = (props) => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])


	return (
		<div className='projects-detail homestyle'>
			<div className='banner'>
				<div className='img-area' style={{ backgroundImage: `url(${homestyleBanner})` }}></div>
				<h1>How I designed a e-commerce website- a UX case study</h1>
				<h5>In this case study, I am going to discuss the process of designing a responsive e-commerce website that allows online shoppers to have a more efficient and error-free experience.</h5>
				<span className='date'>22 February 2024</span>
			</div>
			<div className='details'>
				<div className='title'>
					<h3>Introduction</h3>
				</div>
				<p>In an era where convenience and efficiency are paramount in our daily lives, ecommerce platforms play a pivotal role in transforming the way we shop for everyday items. This case study delves into the redesign and optimization of a crockery and kitchenware ecommerce app, aimed at enhancing user experience (UX) and elevating customer satisfaction.</p>
				<p>Our client, a leading retailer specializing in high-quality crockery and kitchenware, sought to develop a ecommerce app to meet the evolving needs of their tech-savvy customer base. With a vast inventory of products ranging from elegant dinner sets to state-of-the-art kitchen appliances, the client aimed to create a seamless digital shopping experience that would not only showcase their diverse offerings but also simplify the path to purchase.</p>
				<p>The project's primary goal was to design the app's interface and user journey to make it more intuitive, visually engaging, and conducive to conversions. Through a user-centered design approach, our team endeavored to address pain points, improve navigation, and integrate innovative features that would resonate with users seeking both inspiration and efficiency in their shopping experience.</p>
				<div className='title'>
					<h3>Step 1: Empathize</h3>
				</div>
				<p>Because Design Thinking emphasizes the importance of human-centered design, the first step of the process is to empathize. This essentially gave me the opportunity to gain some insight into the thoughts, feelings, and needs of the users.</p>
				<div className='sub-title'>
					<h4>User Interviews</h4>
				</div>
				<p>I conducted interviews with users who are familiar with online shopping to identify their needs and pain points. Because a wide range of demographics enjoys online shopping, I interviewed a total of four participants between the ages of 18 and 50. Their professions varied from student, engineer, to homemaker.</p>
				<h5 className='caption'>Summary of findings from the user interviews:</h5>
				<ul>
					<li>Three out of four participants expressed their interest in a cleaner, simple layout</li>
					<li>Three out of four participants noted that customer reviews of the products are helpful</li>
					<li>Three out of four participants stated the importance of knowing the details of the product</li>
					<li>All of the participants discussed the need for some kind of filters when shopping online</li>
					<li>Three out of four participants were motivated to shop online because of its convenience and wide range of selection</li>
					<li>All of the participants preferred to use a laptop over phone or tablet to shop online</li>
				</ul>
				<p>Some of the participants noted during the interviews,</p>
				<blockquote>
					<ul>
						<li>“I often look at the reviews to see whether the quality is good. I also see whether sizes are accurate.”</li>
						<li>“Sometimes, it looks good on the model, but that might not be the case for me.”</li>
						<li>“I want more than one image of the product to get a better idea of what the product looks like.”</li>
					</ul>
				</blockquote>
				<div className='sub-title'>
					<h4>Competitive Analysis</h4>
				</div>
				<p>Once I was able to get a better understanding of the thoughts and feelings of the users, I proceeded to conduct research on some of the direct and indirect competitors. During the research, I wrote down some of the major strengths and weaknesses of each of the websites. Doing so made it easier to figure out the commonly sought-after features for crockery e-commerce websites.</p>
			</div>
		</div>
	)
}

export default Homstyle;