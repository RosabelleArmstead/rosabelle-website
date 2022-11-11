import React from 'react';
import Timeline from '../components/Timeline';
import './Work.css';

function Work() {
	return (
		<div className='page-container'>
			<section>
				<div className='section-container'>
					<h2 className='section-header'>current</h2>
					<div className='section-contents'>
						<div className='section-item'>
							Currently I'm working full-time as a Programmer on
							the Game Systems team at{' '}
							<a href='https://mediamolecule.com'>
								Media Molecule
							</a>
							. We are responsible for a wide range of areas of
							the codebase, including Dreamiverse UI & UX,
							creation management systems, client to server
							communication layer, new player experience, Imp
							Quests and trophies, and more. In my time at Mm,
							I've played a key role in the development and
							shipping of{' '}
							<a href='https://www.playstation.com/en-gb/games/dreams-ps4/'>
								Dreams
							</a>{' '}
							for the PlayStation 4, as well as the PlayStation VR
							support added after launch. I have also had a major
							hand in the proof of concept work for some R&D
							features for Dreams, though this work is currently
							under NDA.
							<br />
							<br />I also have a keen interest in game
							accessibility and am actively seeking out
							opportunities to expand my knowledge and integrate
							best practices for accessibility in the work that I
							do.
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='section-container'>
					<div className='section-contents'>
						<div className='section-item'>
							<Timeline />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Work;
