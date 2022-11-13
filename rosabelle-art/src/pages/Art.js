import React from 'react';
import Gallery from '../components/Gallery';

function Art() {
	return (
		<div className='page-container'>
			<section>
				<div className='section-container'>
					<h2 className='section-header'>Art</h2>
					<div className='section-contents'>
						<div className='section-item'>
							Here you can find a sample of some of my artwork
							I've completed over the years. I work across a
							variety of traditional and digital media, although
							my recent love has definitely been Procreate (and
							sometimes Photoshop). This gallery also includes a
							few of my sketchbook scribbles, which I carry around
							in my backpack with me on a daily basis.
							<br />
							<br />
							The gallery isn't sorted in any particularly
							meaningful way (aside from a general pattern of more
							recent pieces appearing first), so feel free to have
							a scroll and read a little bit about what I remember
							from the times when I was working on these various
							artworks!
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='section-container'>
					<Gallery />
				</div>
			</section>
		</div>
	);
}

export default Art;
