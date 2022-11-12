import './Navbar.css';

import Monogram from '../monogram.svg';
import DarkMode from './DarkMode';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {
	const [click, setClick] = useState(false);
	//const [click, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeSidebar = () => setClick(false);

	//window.addEventListener('resize', showButton);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<div className='darkmode-toggle-container'>
						<DarkMode />
					</div>

					<div className='monogram-container'>
						<Link
							to='/'
							className='navbar-monogram'
							onClick={closeSidebar}
						>
							<img
								src={Monogram}
								alt="a monogram showing a combination of the letters 'R' and 'A', Rosabelle's initials"
							/>
						</Link>
					</div>

					<div className='hamburger-container'>
						<div
							className='menu-icon'
							onClick={handleClick}
						>
							<FontAwesomeIcon
								icon={click ? 'xmark' : 'bars'}
								fixedWidth
							/>
						</div>
					</div>

					<div className='nav-menu-container'>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className='nav-item'>
								<Link
									to='/'
									className='nav-links'
									onClick={closeSidebar}
								>
									home
									<FontAwesomeIcon
										className='nav-icon'
										icon='house-chimney'
										fixedWidth
									/>
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/work'
									className='nav-links'
									onClick={closeSidebar}
								>
									work
									<FontAwesomeIcon
										className='nav-icon'
										icon='briefcase'
										fixedWidth
									/>
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/art'
									className='nav-links'
									onClick={closeSidebar}
								>
									art
									<FontAwesomeIcon
										className='nav-icon'
										icon='palette'
										fixedWidth
									/>
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/hobbies'
									className='nav-links'
									onClick={closeSidebar}
								>
									hobbies
									<FontAwesomeIcon
										className='nav-icon'
										icon='gamepad'
										fixedWidth
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
