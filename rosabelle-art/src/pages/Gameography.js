import React from 'react';
import './Gameography.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjSeparator from '../components/ProjSeparator';
import {
	faArrowsRotate,
	faArrowsTurnRight,
	faBan,
	faCheck,
} from '@fortawesome/free-solid-svg-icons';

/* TODO: grid of images */
function Gameography() {
	return (
		<div className='page-container'>
			<section>
				<div className='section-container'>
					<h2 className='section-header'>projects</h2>
					<div className='projects-section'>
						<div className='projects-heading'>
							<div className='ph-icon'>
								<FontAwesomeIcon icon={faArrowsTurnRight} />
							</div>
							<div className='ph-text'>
								<h3>Upcoming</h3>
							</div>
						</div>
						<div className='project-list'>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/clockworkrevolution.jpg'
									alt='Clockwork Revolution'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/fable.jpg'
									alt='Fable (2027)'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/campaignevolved.jpg'
									alt='Halo: Campaign Evolved'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/spyro.webp'
									alt='Spyro: A Realm Beyond'
								/>
							</div>
							<div className='project-container'>
								Several unannounced XBOX titles
							</div>
							<div className='project-container'>
								Unannounced Media Molecule title
							</div>
						</div>
					</div>
					<ProjSeparator />
					<div className='projects-section'>
						<div className='projects-heading'>
							<div className='ph-icon'>
								<FontAwesomeIcon icon={faArrowsRotate} />
							</div>
							<div className='ph-text'>
								<h3>Ongoing</h3>
							</div>
						</div>
						<div className='project-list'>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/seaofthieves.png'
									alt='Sea of Thieves Seasons'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/minecraft.jpg'
									alt='Minecraft'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/candycrush.jpg'
									alt='Candy Crush Saga'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/forza.webp'
									alt='Forza Horizon 6 Series'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/flightsim.png'
									alt='Microsoft Flight Simulator 2024'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/overwatch.jpg'
									alt='Overwatch'
								/>
							</div>
						</div>
					</div>
					<ProjSeparator />
					<div className='projects-section'>
						<div className='projects-heading'>
							<div className='ph-icon'>
								<FontAwesomeIcon icon={faCheck} />
							</div>
							<div className='ph-text'>
								<h3>Shipped</h3>
							</div>
						</div>
						<div className='project-list'>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/sotcustomseas.jpg'
									alt='Sea of Thieves Custom Seas (Season 20)'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/doomdarkages.jpg'
									alt='Doom the Dark Ages'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/dreams/dreams.jpg'
									alt='Dreams (PS4)'
								/>
							</div>
						</div>
					</div>
					<ProjSeparator />
					<div className='projects-section'>
						<div className='projects-heading'>
							<div className='ph-icon'>
								<FontAwesomeIcon icon={faBan} />
							</div>
							<div className='ph-text'>
								<h3>Cancelled</h3>
							</div>
						</div>
						<div className='project-list'>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/everwild.webp'
									alt='Everwild'
								/>
							</div>
							<div className='project-container'>
								<img
									className='project-img'
									src='images/work/xbox/perfectdark.jpg'
									alt='Perfect Dark'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Gameography;
