import './Gallery.css';
import React from 'react';

function GalleryItem(props) {
	const thumbSlug = 'images/art/thumbnails/';
	const imgSlug = 'images/art/';

	return (
		<>
			<div className='gallery-item'>
				<a
					className='gallery-item-btn'
					href={imgSlug + props.src}
				>
					<figure
						className='gallery-item-wrap'
						data-category={props.label}
					>
						<img
							src={thumbSlug + props.src}
							alt={props.alt}
							className='gallery-item-img'
						/>
					</figure>
					<div className='gallery-item-info'>
						<h5 className='gallery-item-header'>{props.title}</h5>
						{props.desc}
						<div className='gallery-item-subtitle'>
							{props.date}
						</div>
					</div>
				</a>
			</div>
		</>
	);
}

export default GalleryItem;
