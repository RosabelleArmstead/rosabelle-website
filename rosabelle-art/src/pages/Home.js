import React from 'react';
import '../App.css';
import './Home.css';

function Home() {
	return (
		<div className='page-container'>
			<section>
				<div className='section-container'>
					<div className='section-item profile-image-container'>
						<img
							className='profile-image'
							src='images/rosabelle.jpg'
							alt='Rosabelle Armstead'
						/>
					</div>
					<h2 className='section-header'>hi</h2>
					<div className='section-contents'>
						<div className='section-item'>
							I'm Rosabelle! I'm a game developer with over 8
							years of industry experience in accessibility,
							program management, technical production and
							full-stack programming.
							<br />
							<br />
							I'm currently an Accessibility Quality Engineer as
							part of Studios Quality at{' '}
							<a href='https://www.xbox.com/en-US/xbox-game-studios'>
								XBOX
							</a>
							, supporting accessibility efforts across the XBOX
							portfolio (including ABK, Zenimax, and publishing)
							and providing education and guidance for partner
							teams.
							<br />
							<br />
							My particular interests are creative and innovative
							solutions in technology, accessibility, and
							frictionless user experiences. I am actively seeking
							out opportunities to expand my knowledge, and now
							work in a dedicated accessibility role full-time at
							XBOX. In my time at my previous studio, Media
							Molecule, I started the{' '}
							<a href='https://x.com/mediamolecule/status/1659233464657272833'>
								Accessibility Champions Program
							</a>{' '}
							in the hope of channelling studio-wide passion for
							accessible games into action, and embedding
							accessibility as a core pillar for their future
							projects.
							<br />
							<br />
							This website has a little bit of everything about me
							- my work, my art and my hobbies. If you have any
							questions or want to contact me, you can find all
							the details at the bottom of the page.
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='section-container'>
					<h2 className='section-header'>
						University of Surrey Graduate
					</h2>

					<div className='section-contents'>
						<div className='section-item'>
							I am a{' '}
							<a href='https://www.surrey.ac.uk/'>
								University of Surrey
							</a>{' '}
							graduate with a BSc in{' '}
							<a href='https://www.surrey.ac.uk/undergraduate/computer-science'>
								Computer Science
							</a>{' '}
							covering a wide range of topics, including
							object-oriented programming, web development,
							artificial intelligence, software development and
							the systems lifecycle, and a range of information
							and computer security modules.
							<br />
							<br />
							As part of my degree, I undertook an industrial
							placement year at{' '}
							<a href='https://mediamolecule.com'>
								Media Molecule
							</a>{' '}
							as a programmer, primarily working with the UI/UX
							team implementing and maintaining large scale UI/UX
							systems for the Dreamiverse. During my placement
							year I played a key role in the development of{' '}
							<a href='https://www.playstation.com/en-gb/games/dreams-ps4/'>
								Dreams
							</a>{' '}
							for the PlayStation 4.
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
