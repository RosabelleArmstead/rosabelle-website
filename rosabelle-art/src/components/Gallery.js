import './Gallery.css';
import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery() {
	return (
		<div className='gallery-container'>
			<div className='gallery-wrapper'>
				<ul className='gallery-items'>
					<GalleryItem
						src='LifeDrawing4.png'
						title='Life Drawing (IV)'
						label='Procreate'
						desc='A quick life drawing scribble using free online resource, line-of-action.com.'
						date='Oct 2022'
					/>
					<GalleryItem
						src='Kingfisher.png'
						title='Kingfisher'
						label='Procreate'
						desc='Procreate study of a kingfisher in flight, just after catching a fish.'
						date='May 2021'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='AgentCarter.png'
						title='Agent Carter'
						label='Procreate'
						desc='A quick restricted palette study of Agent Peggy Carter using some fantastic brushes from the wonderful Dan Goddard.'
						date='Apr 2021'
					/>
					<GalleryItem
						src='EllieGasMask.jpg'
						title='Broken Gas Mask Ellie'
						label='Graphite Pencils'
						desc='A sketch of Ellie from The Last of Us Part II that I was working on in my downtime at work while waiting for code to build, files to transfer, builds to download, and so on.'
						date='Oct 2020'
					/>
					<GalleryItem
						src='BearSketch.png'
						title='Bear Sketch'
						label='Procreate'
						desc='A quick doodle of Bear from Person of Interest as I lazily rewatched the show over a weekend.'
						date='Apr 2020'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='Vista.png'
						title='Vista'
						label='Procreate'
						desc='A quick Procreate vignette (inspired by Alex Neonakis) of a Greece vacation photo provided by a friend.'
						date='July 2020'
					/>
					<GalleryItem
						src='Ellie.png'
						title='Ellie'
						label='Procreate'
						desc='A painting of Ellie from The Last of Us Part II as I waited patiently for the game to launch.'
						date='June 2020'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='DogStudy.jpg'
						title='Dog Study'
						label='Graphite Pencils'
						desc="Some quick desk doodles of a colleague's dog who made a suprise appearance during a studio-wide Teams meeting."
						date='Oct 2020'
					/>
					<GalleryItem
						src='FancyPigeon1.png'
						title='Fancy Pigeon I'
						label='Procreate'
						desc='I recently learned about Fancy Pigeon breeding... this will hopefully be the first in a series of Fancy Pigeons.'
						date='Oct 2022'
					/>
					<GalleryItem
						src='birds3.jpg'
						title='Birds Study (III)'
						label='Graphite Pencils'
						desc='A few birds scribbled during a lazy sketching evening.'
						date='Aug 2022'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='RootSketch.png'
						title='Root Sketch'
						label='Procreate'
						desc='A quick doodle of Root from Person of Interest as I lazily rewatched the show over a weekend.'
						date='Apr 2020'
					/>
					<GalleryItem
						src='SameenShawSketch.png'
						title='Sameen Shaw Sketch'
						label='Procreate'
						desc='A quick doodle of Shaw from Person of Interest as I lazily rewatched the show over a weekend.'
						date='Apr 2020'
					/>
					<GalleryItem
						src='HaroldFinchSketch.png'
						title='Harold Finch Sketch'
						label='Procreate'
						desc='A quick doodle of Finch from Person of Interest as I lazily rewatched the show over a weekend.'
						date='Apr 2020'
					/>
					<GalleryItem
						src='JohnReeseSketch.png'
						title='John Reese Sketch'
						label='Procreate'
						desc='A quick doodle of Reese from Person of Interest as I lazily rewatched the show over a weekend.'
						date='Apr 2020'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='Robins.png'
						title='Round of Robins'
						label='Procreate'
						desc='A collection of robins I painted throughout various points of my final year of university.'
						date='Apr 2020'
					/>
					<GalleryItem
						src='LifeDrawing2.png'
						title='Life Drawing (II)'
						label='Procreate'
						desc='The second of two life drawing scribbles in one session using the free line-of-action.com tool.'
						date='Sep 2021'
					/>
					<GalleryItem
						src='LifeDrawing3.png'
						title='Life Drawing (III)'
						label='Procreate'
						desc='An old life drawing scribble completed using the free line-of-action.com tool.'
						date='Unknown'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='NiagaraFalls.png'
						title='Niagara Falls'
						label='Procreate'
						desc='I tried to capture a memory from a family vacation to New York City and Niagara Falls in this Procreate painting.'
						date='Feb 2020'
					/>
					<GalleryItem
						src='WaxResist.png'
						title='Wax Resist Experiment'
						label='Procreate'
						desc='An attempt to emulate an ink and wax resist style of painting in Procreate.'
						date='Oct 2019'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='EuropeanRobin.png'
						title='European Robin'
						label='Procreate'
						desc='A painting of the classic European Robin completed in my downtime during my final year of university.'
						date='Apr 2020'
					/>
					<GalleryItem
						src='OrientalMagpieRobin.png'
						title='Oriental Magpie Robin'
						label='Procreate'
						desc='A painting of a round Oriental Magpie Robin completed in my downtime during my final year of university.'
						date='Apr 2020'
					/>
					<GalleryItem
						src='RedCappedRobin.png'
						title='Red-Capped Robin'
						label='Procreate'
						desc='A painting of the stunning Red-Capped Robin completed in my downtime during my final year of university.'
						date='Apr 2020'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='YellowRobin.png'
						title='Eastern Yellow Robin'
						label='Procreate'
						desc='A painting of the bright Eastern Yellow Robin completed in my downtime during my final year of university.'
						date='Apr 2020'
					/>
					<GalleryItem
						src='PinkRobin.png'
						title='Pink Robin'
						label='Procreate'
						desc='A painting of the the Australian Pink Robin - the inspiration for the Round of Robins collection - completed in my downtime during my final year of university.'
						date='Apr 2020'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='Clicker.jpg'
						title='Clicker'
						label='Graphite Pencils'
						desc='A small sketchbook drawing of a clicker from The Last of Us I completed as I got increasingly excited about the launch of Part II.'
						date='May 2020'
					/>
					<GalleryItem
						src='TaylorSwift.jpg'
						title='Taylor Swift'
						label='HB, 3B and 8B Pencils'
						desc='A pencil drawing of Taylor Swift as requested by a high-school friend.'
						date='Nov 2014'
					/>

					<GalleryItem
						src='HeatherMorris.jpg'
						title='Heather Morris'
						label='HB, 3B and 7B Pencils'
						desc='A pencil drawing of Heather Morris, most known for her role as Brittany S. Pierce in Glee.'
						date='Jan 2015'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='Clarke.png'
						title='Clarke Griffin'
						label='Photoshop CS6'
						desc='A digital painting of Clarke Griffin from The 100.'
						date='Feb 2016'
					/>
					<GalleryItem
						src='Lexa.png'
						title='Lexa (II)'
						label='Photoshop CS6'
						desc='A digital painting of Lexa from The 100.'
						date='Feb 2016'
					/>
					<GalleryItem
						src='Shaw.png'
						title='Sameen Shaw'
						label='Photoshop CS6'
						desc='A digital painting of Sameen Shaw from Person of Interest.'
						date='May 2016'
					/>
					<GalleryItem
						src='Root2.jpg'
						title='Root (II)'
						label='Photoshop CS6'
						desc='A digital painting of Root from Season 5 of Person of Interest.'
						date='Nov 2016'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='Lincoln.png'
						title='Lincoln'
						label='Photoshop CS6'
						desc='A digital painting of Lincoln from The 100.'
						date='Apr 2016'
					/>
					<GalleryItem
						src='ChrisColfer.jpg'
						title='Chris Colfer'
						label='paint.NET'
						desc='A digital painting of Chris Colfer. This was one of my first few digital paintings ever.'
						date='Jul 2015'
					/>
					<GalleryItem
						src='AnnaKendrick.jpg'
						title='Anna Kendrick'
						label='HB, 2B, 3B and 6B Pencils'
						desc='A graphite pencil drawing of Anna Kendrick.'
						date='Jul 2015'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='Finch.png'
						title='Harold Finch'
						label='Photoshop CS6'
						desc='A digital painting of Harold Finch from Person of Interest. I particularly liked the lighting in this shot, so decided to paint it.'
						date='Jul 2016'
					/>
					<GalleryItem
						src='Root.png'
						title='Root'
						label='Photoshop CS6'
						desc='A digital painting of Root from Person of Interest. Fun fact: my mouse mat was this painting for a lot of my time at university.'
						date='Jun 2016'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='bears.jpg'
						title='Bears Study'
						label='Graphite Pencils'
						desc='Some quick bear doodles at my desk one day - I just think bears are cute.'
						date='Sep 2020'
					/>
					<GalleryItem
						src='DinaStudy.jpg'
						title='Dina Study'
						label='Graphite Pencils'
						desc='Some more sketchbook scribbles from The Last of Us Part II hype wave. This time: Dina.'
						date='Oct 2020'
					/>
					<GalleryItem
						src='EllieStudy.jpg'
						title='Ellie Study'
						label='Graphite Pencils'
						desc='Some sketchbook scribble studies of Ellie from The Last of Us Part II.'
						date='Sep 2020'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='GraceHelbig.jpg'
						title='Grace Helbig'
						label='HB, B and 4B Pencils'
						desc="A graphite pencil drawing of YouTuber Grace Helbig. I got to give the original copy to her at one of her book signings - I'm sure she doesn't have it anymore."
						date='Jul 2014'
					/>
					<GalleryItem
						src='Hook.jpg'
						title='Killian Jones'
						label='HB, 3B and 8B Pencils'
						desc="A graphite pencil drawing of Hook from Once Upon a Time. This one lives on my parents' living room wall."
						date='May 2014'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='JoeyGraceffa.jpg'
						title='Joey Graceffa'
						label='HB, 3B and 7B Pencils'
						desc="A graphite pencil drawing of YouTuber Joey Graceffa. I got to give the original copy to him at one of his book signings - I'm sure he doesn't have it anymore."
						date='Apr 2015'
					/>
					<GalleryItem
						src='Lexa.jpg'
						title='Lexa'
						label='HB, 2B and 4B Pencils'
						desc='A comeback after a long(ish) hiatus - a graphite pencil sketch of Lexa from The 100.'
						date='Apr 2015'
					/>
					<GalleryItem
						src='WestminsterAbbey.jpg'
						title='Westminster Abbey'
						label='Watercolours'
						desc='A piece from my GCSE Art sketchbook where the theme was "Structure". I was particularly proud of a few of my London-based experiments.'
						date='Jan 2014'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='DarrenCriss.jpg'
						title='Darren Criss'
						label='Coloured Pencils'
						desc='A coloured pencil drawing of Darren Criss. Fun fact: I used almost an entire pink pencil for this.'
						date='Jan 2014'
					/>
					<GalleryItem
						src='birds2.jpg'
						title='Birds Study (II)'
						label='Graphite Pencils'
						desc='Some more sketchbook bird scribbles from my desk as I waited for my code to build during remote work times.'
						date='Jul 2020'
					/>
					<GalleryItem
						src='birds1.jpg'
						title='Birds Study (I)'
						label='Graphite Pencils'
						desc='Some sketchbook bird scribbles from my desk as I waited for my code to build during remote work times.'
						date='Jul 2020'
					/>
					<GalleryItem
						src='JoeyRichter.jpg'
						title='Joey Richter'
						label='Coloured Pencils'
						desc='A coloured pencil drawing of Joey Richter from Team Starkid.'
						date='Feb 2014'
					/>
				</ul>
				<ul className='gallery-items'>
					<GalleryItem
						src='JoeWalker.jpg'
						title='Joe Walker'
						label='Coloured Pencils'
						desc='A coloured pencil drawing of Joe Walker from Team Starkid. Fun fact: I worked on this while I worked backstage for the school production at the time.'
						date='Feb 2014'
					/>
					<GalleryItem
						src='Elsa.jpg'
						title='Elsa'
						label='Graphite Pencils'
						desc='A pencil drawing of Elsa from Frozen. There is also a little bit of dotted acrylic white paint for the icy details.'
						date='Jan 2014'
					/>
					<GalleryItem
						src='StPauls.jpg'
						title="St. Paul's Cathedral"
						label='Biro'
						desc='A piece from my GCSE Art sketchbook where the theme was "Structure". I was particularly proud of a few of my London-based experiments.'
						date='Jan 2014'
					/>
				</ul>
			</div>
		</div>
	);
}

export default Gallery;
