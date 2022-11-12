import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pdf from '../documents/CV.pdf';

function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer-inner'>
				<div className='social-media-wrap'>
					<div className='social-icons'>
						<a
							className='social-icon-link twitter'
							href='https://twitter.com/rosabelledraws'
							aria-label='Twitter'
						>
							<FontAwesomeIcon icon={['fab', 'twitter']} />
						</a>
						<a
							className='social-icon-link linkedin'
							href='https://www.linkedin.com/in/rosabellearmstead/'
							aria-label='LinkedIn'
						>
							<FontAwesomeIcon icon={['fab', 'linkedin']} />
						</a>
						<a
							className='social-icon-link email'
							href='mailto:rosabelle.l.armstead@gmail.com'
							aria-label='Email'
						>
							<FontAwesomeIcon icon={'envelope'} />
						</a>
						<a
							className='social-icon-link instagram'
							href='https://www.instagram.com/rosabellearmstead/'
							aria-label='Instagram'
						>
							<FontAwesomeIcon icon={['fab', 'instagram']} />
						</a>
						<a
							className='social-icon-link github'
							href='https://github.com/RosabelleArmstead'
							aria-label='GitHub'
						>
							<FontAwesomeIcon icon={['fab', 'github']} />
						</a>
						<a
							className='social-icon-link resume'
							href={pdf}
							aria-label='CV'
						>
							<FontAwesomeIcon icon={['far', 'file-lines']} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
