import React from 'react';
import TimelineEvent from './TimelineEvent';
import TimelineEventMm from './TimelineEventMm';
import './Timeline.css';

function Timeline() {
	return (
		<div className='timeline'>
			<TimelineEventMm
				className='timeline-container game-systems'
				title='Game Systems Programmer | Dreams'
				description='Working on the Game Systems team has involved high levels of collaborative
							effort with server and design teams on various design changes and changes 
							to the client-to-server communication layer. It has also involved some R&D 
							work on a range of player-to-player and player identity related systems, 
							though these are currently under NDA.'
				systems='Creation Publishing System, Player Identity, UI SFX Interface, Help & How-To, 
						Imp Quests & Imp Quest UI'
				dateRange='2021-Present'
			/>
			<TimelineEventMm
				className='timeline-container junior'
				title='Junior Programmer | Dreams'
				description='Working on the Dreamiverse team, I implemented player progression systems, 
							the trophy unlock interface and the new player onboarding experience, alongside 
							maintaining other Dreamiverse features. We worked closely in small strike teams 
							per system implemented for rapid collaboration from prototyping to iteration to 
							delivery.'
				systems='Imp Quests & Imp Quest UI, Trophies, Player Identity, Onboarding Flow'
				dateRange='2019-2021'
				hasImages='true'
				images={[
					'dreams/controls_reminder.gif',
					'dreams/tiered_quest.gif',
					'dreams/one_shot_quest.jpg',
					'dreams/creative_quest.gif',
				]}
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
			<TimelineEventMm
				className='timeline-container intern'
				title='Intern Programmer | Dreams'
				description='As part of the Dreamiverse team, I implemented and maintained various UI and UX 
							features in Dreamiverse Menus and Create UI, including some work in shader code.'
				systems='Tooltips & Button Prompts, Imp Quests & Imp Quest UI, Main Menu UI'
				dateRange='2018-2019'
				hasImages='true'
				images={[
					'dreams/main_menu.gif',
					'dreams/profile_page.jpg',
					'dreams/imp_quests.jpg',
					'dreams/button_prompts_and_tooltips.gif',
					'dreams/more_info.gif',
				]}
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
		</div>
	);
}

export default Timeline;
