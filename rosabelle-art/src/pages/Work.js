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
							Currently I'm working full-time as an Accessibility
							Quality Engineer as part of Studios Quality at{' '}
							<a href='https://www.xbox.com/en-US/xbox-game-studios'>
								Xbox
							</a>
							, supporting accessibility efforts across the Xbox
							portfolio and providing education and guidance for
							partner teams.
							<br />
							<br />
							Previously, I was at{' '}
							<a href='https://mediamolecule.com'>
								Media Molecule
							</a>{' '}
							for six years, starting as a Programmer and later
							moving into Technical Production. In my time at Mm,
							I started the{' '}
							<a href='https://x.com/mediamolecule/status/1659233464657272833'>
								Accessibility Champions Program
							</a>{' '}
							&mdash; a multi-discipline group of accessibility
							and inclusivity advocates and experts in-studio
							&mdash; in the hope of channelling studio-wide
							passion for accessible games into action.
							<br />
							<br />
							As a Technical Producer, I produced a mix of
							single-disciplinary and cross-disciplinary Game
							Technology teams, including Graphics, UI/UX, and
							Game Tools for an unannounced project (this work is
							under NDA). Before that I was a Programmer on the
							Game Systems team working on{' '}
							<a href='https://www.playstation.com/en-gb/games/dreams-ps4/'>
								Dreams
							</a>{' '}
							for the PlayStation 4, as well as PlayStation VR
							support and server migration changes post-launch. I
							have also had a major hand in the proof of concept
							work for some R&D features for Dreams, as well as
							laying the technical foundations for UI systems for
							the new project.
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
