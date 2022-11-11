import React from 'react';
import TimelineEvent from './TimelineEvent';
import './Timeline.css';

function Timeline() {
	return (
		<div className='timeline'>
			<TimelineEvent
				className='timeline-container game-systems'
				iconPrefix='fab'
				icon='playstation'
				title='Game Systems Programmer | Dreams'
				description='Working on the Game Systems team has involved high levels of collaborative
							effort with server and design teams on various design changes and changes 
							to the client-to-server communication layer. It has also involved some R&D 
							work on a range of player-to-player and player identity related systems, 
							though these are currently under NDA.'
				hasSystems={true}
				systems='Creation Publishing System, Player Identity, UI SFX Interface, Help & How-To, 
						Imp Quests & Imp Quest UI'
				dateRange='2021-Present'
			/>
			<TimelineEvent
				className='timeline-container junior'
				iconPrefix='fab'
				icon='playstation'
				title='Junior Programmer | Dreams'
				description='Working on the Dreamiverse team, I implemented player progression systems, 
							the trophy unlock interface and the new player onboarding experience, alongside 
							maintaining other Dreamiverse features. We worked closely in small strike teams 
							per system implemented for rapid collaboration from prototyping to iteration to 
							delivery.'
				hasSystems={true}
				systems='Imp Quests & Imp Quest UI, Trophies, Player Identity, Onboarding Flow'
				dateRange='2019-2021'
			/>
			<TimelineEvent
				className='timeline-container media-officer'
				iconPrefix='fas'
				icon='desktop'
				title='Media Officer | Team Surrey Archery'
				description='Being the Media Officer for Team Surrey Archery involved refreshing the website 
							visuals, updating the website with match reports and various resources, and
							managing the social media prescence of the team.'
				dateRange='2018-2020'
			/>
			<TimelineEvent
				className='timeline-container intern'
				iconPrefix='fab'
				icon='playstation'
				title='Intern Programmer | Dreams'
				description='As part of the Dreamiverse team, I implemented and maintained various UI and UX 
							features in Dreamiverse Menus and Create UI, including some work in shader code.'
				hasSystems={true}
				systems='Tooltips & Button Prompts, Imp Quests & Imp Quest UI, Main Menu UI'
				dateRange='2018-2019'
			/>
			<TimelineEvent
				className='timeline-container nandos'
				iconPrefix='fas'
				icon='pepper-hot'
				title="Cashier | Nando's UK"
				description="As a front-of-house member of the Nando's Guildford team, I learned a valuable
							set of transferable skills including customer service, time management, 
							multi-tasking, teamwork and interpersonal skills, as well as earning employee of 
							the month 3 times during my 9 months working there."
				dateRange='2017-2018'
			/>
			<TimelineEvent
				className='timeline-container work-experience'
				iconPrefix='fab'
				icon='playstation'
				title='Work Experience Programmer | Dreams'
				description='3 weeks of unpaid work experience. In my first week at Media Molecule other 
							students and I worked together to develop a two-player version of the classic 
							game of "Snake" and a twist on the popular app, "Flappy Bird". From this 
							experience I learned how to work quickly under pressure and in a team to have a 
							completed project in a short period of time. In my second week, I developed a more 
							complex revision resource system independently, learning how to rely on my own 
							resources to solve problems and complete the task I had been set. My third week 
							involved working directly on a graphical element of the current project of the 
							company, adapting to and learning C++ (which I had never used before) and working 
							with my supervisor to complete the set tasks.'
				dateRange='2015-2017'
			/>
		</div>
	);
}

export default Timeline;
