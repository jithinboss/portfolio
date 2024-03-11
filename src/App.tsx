import "./App.scss";
import React, { memo } from "react";
import Layout from './pages/Layout';
import AnimatedCursor from "react-animated-cursor"


interface IApp {

}

const App: React.FC<IApp> = (props) => {
	return (

		<div className="main-layout">
			<AnimatedCursor
				innerSize={0}
				outerSize={32}
				innerScale={1}
				outerScale={2}
				outerAlpha={0}
				innerStyle={{
					backgroundColor: '#000'
				}}
				outerStyle={{
					border: '2px solid #000'
				}}
				clickables={[
					'.anime-cursor'
				]}
			/>
			<Layout />
		</div>
	);
}

export default memo(App);