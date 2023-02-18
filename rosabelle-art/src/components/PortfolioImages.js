import React from 'react';
function PortfolioImages(props) {
	const imgSlug = 'images/work/';
	const { images } = props;
	return (
		<div className='portfolio-image-container'>
			{images.map((imgUrl) => (
				<img
					className='portfolio-image'
					src={imgSlug + imgUrl}
				/>
			))}
		</div>
	);
}

export default PortfolioImages;
