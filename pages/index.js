import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import LandingCarousel from '../components/landingCarousel'
import LandingCarouselSlide from '../components/landingCarouselSlide'

import heroCopy from '../copy/heroCopy.json'
import landingCarouselCopy from '../copy/landingCarouselCopy.json'

class Landing extends React.Component {
	constructor(props) {
		super(props)
	}

	static getInitialProps({ req }) {
      return { locale: req.locale };
    }

	render() {
		const locale = this.props.locale
		const heroContent = heroCopy[locale]
		const enterButton = landingCarouselCopy[locale]['enterButton']

		const slides = landingCarouselCopy[locale]['rooms'].map((room, i) => {
			const link = `/${locale}/rooms/${i + 1}`
			return (
				<div>
					<LandingCarouselSlide content={{roomNumber: i + 1, ...room}} enterButton={enterButton} link={link}/>
				</div>
			)
		})

		return (
			<Layout>
				<Hero content={heroContent}/>
				<LandingCarousel>
					{slides}
				</LandingCarousel>
			</Layout>
		);
	}
}

export default Landing
