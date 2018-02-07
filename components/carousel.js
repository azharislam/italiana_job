import React from 'react';
import Slider from 'react-slick';
import Head from 'next/head'

export default (props) => (
    <div>
        <Head>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <Slider {...props.carouselSettings}>
            <div><img src={props.images[0]}/></div>
            <div><img src={props.images[1]}/></div>
        </Slider>
    </ div>               
)