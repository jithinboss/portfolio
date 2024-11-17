import "./App.scss";
import React, { memo } from "react";
import Layout from './pages/Layout';
import AnimatedCursor from "react-animated-cursor"


interface IApp {

}

const App: React.FC<IApp> = (props) => {
	return (

		<div className="main-layout">
			{/* <AnimatedCursor
				innerSize={0}
				outerSize={32}
				innerScale={0}
				outerScale={1.7}
				outerAlpha={0}
				outerStyle={{
					backgroundColor: "black",
					mixBlendMode: "exclusion"
				}}
				clickables={[
					'.anime-cursor'
				]}
				trailingSpeed={0}
				showSystemCursor={true}
			/> */}
			<Layout />
		</div>
	);
}

export default memo(App);