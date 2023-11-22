import React from 'react';
import TimelineEvent from './TimelineEvent';
import TimelineEventMm from './TimelineEventMm';
import './Timeline.css';

function Timeline() {
	return (
		<div className='timeline'>
			<TimelineEventMm
				className='timeline-container tech-prod'
				title='Associate Technical Producer | New Project (NDA)'
				description='Sprint and milestone planning, execution and review for several 
							multi-disciplinary teams to help align milestone work to creative vision 
							during concept development. Collaborate with Leadership Team to prioritise, 
							scope and schedule milestone work to meet critical deadlines during concept 
							development. Build a comprehensive backlog for Game Tech teams and 
							facilitate regular backlog grooming with team members.'
				dateRange='Oct 2022-Present'
				teams='Game Graphics, UI/UX, Game Tools'
			/>
			<TimelineEventMm
				className='timeline-container accessibility-champs'
				title='Accessibility Champions Co-Founder | Media Molecule'
				description='Liaise with Leadership Team to embed accessibility in internal processes.
							Facilitate cross-team and cross-studio collaboration. Organise studio-wide 
							accessibility awareness and training days. Arrange materials, agendas and 
							follow-up from meetings. Deliver regular presentations to provide updates 
							for accessibility priorities.'
				dateRange='Mar 2022-Present'
				images={['dreams/accessibility_champs.jpg']}
			/>
			<TimelineEventMm
				className='timeline-container game-systems'
				title='Game Systems Programmer | Dreams'
				description='Working on the Game Systems team has involved high levels of collaborative
							effort with server and design teams on various design changes and changes 
							to the client-to-server communication layer. It has also involved some R&D 
							work on a range of player-to-player and player identity related systems, and 
							laying the technical foundations for UI systems for our upcoming project,
							though these are currently under NDA.'
				systems='Creation Publishing System, Player Identity, UI SFX Interface, Help & How-To, 
						Imp Quests & Imp Quest UI, New Project UI R&D'
				dateRange='Jun 2021-Oct 2022'
				images={[
					'dreams/DCUT.gif',
					'dreams/local_limits.jpg',
					'dreams/online_limits.jpg',
				]}
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
				dateRange='Jun 2019-Jun 2021'
				images={[
					'dreams/controls_reminder.gif',
					'dreams/tiered_quest.gif',
					'dreams/one_shot_quest.jpg',
					'dreams/creative_quest.gif',
				]}
			/>
			<TimelineEventMm
				className='timeline-container intern'
				title='Intern Programmer | Dreams'
				description='As part of the Dreamiverse team, I implemented and maintained various UI and UX 
							features in Dreamiverse Menus and Create UI, including some work in shader code.'
				systems='Tooltips & Button Prompts, Imp Quests & Imp Quest UI, Main Menu UI'
				dateRange='Jul 2018-Jun 2019'
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
				dateRange='Oct 2017-Oct 2018'
			/>
		</div>
	);
}

export default Timeline;
