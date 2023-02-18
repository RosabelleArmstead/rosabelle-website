import React from 'react';
import Logo from '../logo.svg';
import PortfolioImages from './PortfolioImages';
import './Timeline.css';

function TimelineEventMm(props) {
	return (
		<div className={props.className}>
			<div className='timeline-icon mm'>
				<img
					src={Logo}
					alt='Media Molecule logo'
				/>
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
				{props.hasImages == 'true' && (
					<PortfolioImages images={props.images} />
				)}
			</div>
		</div>
	);
}

export default TimelineEventMm;
