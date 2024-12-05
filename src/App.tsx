import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Pages
import Home from "./pages/Home/Home";
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
					{/* <Footer /> */}
				</Router>
			</div>
		</>
	);
};

export default App;