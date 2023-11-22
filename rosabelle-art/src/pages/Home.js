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
							alt='Rosabelle Armstead hugging a donut pillow.'
						/>
					</div>
					<h2 className='section-header'>hi</h2>
					<div className='section-contents'>
						<div className='section-item'>
							I'm Rosabelle! I'm an Associate Technical Producer
							with over 5 years of industry experience in
							technical production and game systems programming.
							<br />
							<br />
							I'm currently an Associate Technical Producer,
							producing a mix of single-disciplinary and
							cross-disciplinary Game Tech teams (Game Graphics,
							UI/UX, Game Tools) at{' '}
							<a href='https://mediamolecule.com'>
								Media Molecule
							</a>
							.
							<br />
							<br />
							My particular interests are creative and innovative
							solutions in technology, frictionless user
							experiences and accessibility. I am actively seeking
							out opportunities to expand my knowledge and
							advocating for accessibility in my day-to-day work.
							I work closely with the rest of the{' '}
							<a href='https://x.com/mediamolecule/status/1659233464657272833?s=20'>
								Mm Accessibility Champions
							</a>{' '}
							to do what we can to embed accessibility as a
							frontline consideration throughout the studio, with
							the hope that we can fly the flag for a baseline
							expectation of knowledge and advocacy for our
							Molecules.
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
