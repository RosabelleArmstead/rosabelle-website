import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

function DarkMode() {
	const [mode, setMode] = useState(() => {
		// use device default
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-colour-scheme: light').matches
		) {
			return 'dark';
		} else {
			return 'light';
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

	if (mode && mode === 'dark') {
		changeToLight();
	} else {
		changeToDark();
	}

	return (
		<DarkModeToggle
			mode={mode}
			dark='light'
			light='dark'
			size='sm'
			inactiveLabelColor='#F2E7D5'
			inactiveLabelColorOnHover='#393E46'
			inactiveTrackColor='#F2E7D5'
			inactiveTrackColorOnHover='#F2E7D5'
			inactiveTrackColorOnActive='#6D9886'
			activeLabelColor='#cfb48d'
			activeLabelColorOnHover='#191c22'
			activeTrackColor='#cfb48d'
			activeTrackColorOnHover='#cfb48d'
			activeTrackColorOnActive='#cfb48d'
			inactiveThumbColor='#6D9886'
			activeThumbColor='#25342e'
			onChange={(mode) => {
				setMode(mode);
			}}
		/>
	);
}

export default DarkMode;
