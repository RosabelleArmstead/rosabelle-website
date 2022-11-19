// Import CSS
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import pages
import Home from './pages/Home';
import Work from './pages/Work';
import Art from './pages/Art';
import Hobbies from './pages/Hobbies';

// Boilerplate imports
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

library.add(
	fab,
	faXmark,
	faBars,
	faHouseChimney,
	faBriefcase,
	faPalette,
	faGamepad,
	faEnvelope,
	faFileLines,
	faPepperHot,
	faDesktop
);

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route
					path='/'
					exact
					element={<Home />}
				/>
				<Route
					path='/work'
					exact
					element={<Work />}
				/>
				<Route
					path='/art'
					exact
					element={<Art />}
				/>
				<Route
					path='/hobbies'
					exact
					element={<Hobbies />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
