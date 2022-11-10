// Import CSS
import './Button.css';

// Import components
import { Link } from 'react-router-dom';

// Boilerplate imports
import React from 'react';

const STYLES = ['btn--primary', 'btn--selected'];
const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
}) => {
	// if we don't have a style, default to the first
	const setButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];
	// if we don't have a size, default to the first
	const setButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<Link
			className='btn-narrow-screen'
			to='#'
		>
			<button
				className={`btn ${setButtonStyle} ${setButtonSize}`}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</Link>
	);
};
