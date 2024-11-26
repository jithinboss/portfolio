import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
//Components
import Header from "./components/Header";
//Pages
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contacts from "./pages/Contacts";


const App: React.FC = () => {
	return (
		<>
			<div className="main-layout">
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/works" element={<Works />} />
						<Route path="/about" element={<About />} />
						<Route path="/contacts" element={<Contacts />} />
					</Routes>
				</Router>
				<footer>
					<span>© 2023 by Jithin Bose. All rights reserved.</span>
				</footer>
			</div>
		</>
	);
};

export default App;