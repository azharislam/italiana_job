import Head from 'next/head'

const LandingCarouselSlide = (props) => (
	<section className='landingSlide'>
		<Head>
			<link rel='stylesheet' href='/static/css/landingCarouselSlide.css' />
		</Head>
		<div className='landingSlideDetails'>
			<div>
				<h3 className='landingSlideRoomNumber'>{props.content.roomNumber}</h3>
				<h4 className='landingSlideRoomName'>{props.content.roomName}</h4>
				<p className='landingSlideRoomDescription'>{props.content.roomDetails}</p>
				<a className='landingSlideButton' href ={props.link}>{props.enterButton}</a>
			</div>
		</div>
			<img src={props.content.roomImageUrl}	className='landingSlideImage'/>
	</section>
)

export default LandingCarouselSlide
