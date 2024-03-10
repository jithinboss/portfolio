// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Scrollbar from 'react-scrollbars-custom';
//Pages
import Home from './pages/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About';
//Asstes
import Background from './assets/gr-bg.svg';
import Layout from './pages/Layout';


interface IApp {

}

const App: React.FC<IApp> = (props) => {
	return (

		<div className="main-layout">
			<Layout />
		</div>
	);
}

export default memo(App);