import React from 'react';
import '../App.css';

function Home() {
	return (
		<div className='page-container'>
			<section>
				<div className='section-container'>
					<h2 className='section-header'>hi.</h2>
					<div className='section-contents'>
						<div className='section-item'>
							I'm Rosabelle! I'm primarily a UI/UX Programmer (who
							has dabbled in a few other areas of code) with a
							Computer Science degree and over 4 years of
							experience in the industry. I'm currently a
							Programmer on the Game Systems team at{' '}
							<a href='https://mediamolecule.com'>
								Media Molecule
							</a>
							.
							<br />
							<br />I also have a keen interest in game
							accessibility and I am actively seeking out
							opportunities to expand my knowledge and advocating
							for accessibility in my day-to-day work. I do what I
							can to embed accessibility as a{' '}
							<b>frontline consideration</b> throughout the
							studio, with the hope that we can push the boat out
							and come up with innovative and inherently
							accessible features for the UGC space for both
							creators and players.
							<br />
							<br />
							This website has a little bit of everything about me
							- my work, my art and my hobbies. If you have any
							questions or want to contact me, you can find all
							the details at the bottom of the page!
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
							I have completed a BSc degree in{' '}
							<a href='https://www.surrey.ac.uk/undergraduate/computer-science'>
								Computer Science
							</a>{' '}
							covering a wide range of computer science topics,
							including object-oriented programming, web
							development, artificial intelligence, software
							development and the systems lifecycle, and a range
							of information and computer security modules.
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
							year I played a key role in the development of our
							latest project,{' '}
							<a href='https://www.playstation.com/en-gb/games/dreams-ps4/'>
								Dreams
							</a>
							, for the PlayStation 4.
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
