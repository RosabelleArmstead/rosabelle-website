import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Timeline.css';

function TimelineEvent(props) {
	const hasSystems = props.hasSystems;

	if (hasSystems) {
		return (
			<div className={props.className}>
				<div className='timeline-icon'>
					<FontAwesomeIcon icon={[props.iconPrefix, props.icon]} />
				</div>
				<div className='timeline-body'>
					<h4 className='timeline-title'>
						<span className='badge'>{props.title}</span>
					</h4>
					<p className='timeline-description'>
						{props.description}
						<br />
						<br />
						<span className='systems-title'>Systems owned: </span>
						<span className='systems'>{props.systems}</span>
					</p>
					<p className='timeline-subtitle'>{props.dateRange}</p>
				</div>
			</div>
		);
	}
	return (
		<div className={props.className}>
			<div className='timeline-icon'>
				<FontAwesomeIcon icon={[props.iconPrefix, props.icon]} />
			</div>
			<div className='timeline-body'>
				<h4 className='timeline-title'>
					<span className='badge'>{props.title}</span>
				</h4>
				<p className='timeline-description'>{props.description}</p>
				<p className='timeline-subtitle'>{props.dateRange}</p>
			</div>
		</div>
	);
}

export default TimelineEvent;
