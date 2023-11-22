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
							Currently I'm working full-time as an Associate
							Technical Producer for the Game Tech teams at{' '}
							<a href='https://mediamolecule.com'>
								Media Molecule
							</a>
							. I produce a mix of single-disciplinary (Game
							Tools) and multi-disciplinary (Game Graphics, UI/UX)
							teams, doing what is needed to support the teams and
							collaborate with Leadership to be able to align
							milestone work to creative vision during concept
							development.
							<br />
							<br />
							Previously I was a Programmer on the Game Systems
							team working on{' '}
							<a href='https://www.playstation.com/en-gb/games/dreams-ps4/'>
								Dreams
							</a>{' '}
							for the PlayStation 4, as well as PlayStation VR
							support and server migration changes post-launch. I
							have also had a major hand in the proof of concept
							work for some R&D features for Dreams, as well as
							laying the technical foundations for UI systems for
							our upcoming new project (this work is under NDA).
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
