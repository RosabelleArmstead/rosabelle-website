import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

function DarkMode() {
	const [mode, setMode] = useState(() => {
		// use device default
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-colour-scheme: light').matches
		) {
			return 'light';
		} else {
			return 'dark';
		}
	});

	var bodyClassList = document.body.classList;
	const changeToDark = () => {
		if (!bodyClassList.contains('darkmode')) {
			bodyClassList.add('darkmode');
		}
	};

	const changeToLight = () => {
		if (bodyClassList.contains('darkmode')) {
			bodyClassList.remove('darkmode');
		}
	};

	window
		.matchMedia('(prefers-color-scheme: dark')
		.addEventListener('change', (e) => {
			if (e.matches) {
				changeToDark();
			} else {
				changeToLight();
			}
		});

	if (mode && mode === 'light') {
		changeToLight();
	} else {
		changeToDark();
	}

	return (
		<DarkModeToggle
			mode={mode}
			dark='dark'
			light='light'
			size='sm'
			inactiveLabelColor='#cfb48d'
			inactiveLabelColorOnHover='#191c22'
			inactiveTrackColor='#cfb48d'
			inactiveTrackColorOnHover='#cfb48d'
			inactiveTrackColorOnActive='#cfb48d'
			activeLabelColor='#F2E7D5'
			activeLabelColorOnHover='#393E46'
			activeTrackColor='#F2E7D5'
			activeTrackColorOnHover='#F2E7D5'
			activeTrackColorOnActive='#6D9886'
			inactiveThumbColor='#25342e'
			activeThumbColor='#6D9886'
			ariaLabel='dark mode toggle'
			onChange={(mode) => {
				setMode(mode);
			}}
		/>
	);
}

export default DarkMode;
