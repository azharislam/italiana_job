import React from 'react';
import Slider from 'react-slick';
import Head from 'next/head';

export default (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots landingDots',
        arrows: false
    }

    return (
        <section className="landingCarouselContainer">
            {/*The Head component can't be in the Slider component as it will create an extra empty slide. So needs to be wrapped in a section element*/}
            <Head>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
                <link rel="stylesheet" type="text/css" href="/static/css/landingCarousel.css"/>
            </Head>
            <Slider {...settings}>
                {props.children}
            </Slider>
        </section>

    )
}
