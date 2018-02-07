import React, { Component } from 'react';
import Head from 'next/head';
import en from '../../copy/en';
import it from '../../copy/it';
import Navigation from '../../components/navigation';
import Carousel from '../../components/carousel';
import Layout from '../../components/layout';

class App extends Component {
  getLanguageJSON(locale = 'it', page = '1') {
    const myLanguageMap = {
      en: en,
      it: it
    };
    return myLanguageMap[locale];
  }

  static getInitialProps({ req }) {
    return { locale: req.locale || 'en', room: req.room || '1' };
    {
      /* Setting defaults for locale and room in the case that the custom server is not running, i.e npm dev to allow the page to work for rapid development*/
    }
  }

  render() {
    let language = this.getLanguageJSON(this.props.locale);
    const numOfRooms = language.rooms.length;
    const roomIndex = parseInt(this.props.room) - 1;
    let currentRoom = language.rooms[roomIndex];
    const previousRoomIndex = roomIndex === 0 ? numOfRooms - 1 : roomIndex - 1;
    const nextRoomIndex = roomIndex === numOfRooms - 1 ? 0 : roomIndex + 1;
    const carouselSettings = {
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const navigationObject = {
      previousRoom: {
        name: language.rooms[previousRoomIndex].pageHeader,
        link: `${previousRoomIndex + 1}`,
        text: language.bottomNav.previousText
      },
      nextRoom: {
        name: language.rooms[nextRoomIndex].pageHeader,
        link: `${nextRoomIndex + 1}`,
        text: language.bottomNav.nextText
      }
    };
    return (
      <Layout>
        <Head>
          <link rel="stylesheet" href="/static/css/rooms.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <header className="header">
          <div className="carousel">
            <Carousel images={currentRoom.carouselImages} carouselSettings={carouselSettings} />
          </div>
          <h1>{currentRoom.pageHeader}</h1>
        </header>
        <section className="container">
          <section className="cardOne">
            <div className="cardOneText">
              <h2>{currentRoom.cardOne.title}</h2>
              <p>{currentRoom.cardOne.info}</p>
            </div>
            <div className="cardOneImg">
              <img src={currentRoom.cardOne.image} />
            </div>
          </section>
          <img src={currentRoom.backgroundImg} />
          <section className="cardTwo">
            <div className="cardTwoImg">
              <img src={currentRoom.cardTwo.image} />
            </div>
            <div className="cardTwoText">
              <h2>{currentRoom.cardTwo.title}</h2>
              <h3>{currentRoom.cardTwo.subTitle}</h3>
            </div>
            <div className="cardTwoLink">
              <a href={currentRoom.cardTwo.link}>{currentRoom.cardTwo.linkText}</a>
            </div>
          </section>
        </section>
        <section className="cardThree">
          <div className="cardThreeGif">
            <img src={currentRoom.cardThree.mainImage} />
          </div>

          <div className="cardThreeColumnRight">
            <div className="cardThreeText">
              <h2>{currentRoom.cardThree.title}</h2>
              <p>{currentRoom.cardThree.info}</p>
            </div>
            <div className="cardThreeImg">
              <div className="cardThreeImg1">
                <img src={currentRoom.cardThree.subImage1} />
              </div>
              <div className="cardThreeImg2">
                <img src={currentRoom.cardThree.subImage2} />
              </div>
            </div>
          </div>
        </section>
        <div className="videoBlock">
          <div className="video">
            <iframe width="100%" height="800px" src={currentRoom.video.url} frameborder="0" allowfullscreen />
          </div>
          <div className="videoText">
            <h2>{currentRoom.video.title}</h2>
            <p>{currentRoom.video.info}</p>
          </div>
        </div>
        <div className="bottomNav">
          <Navigation nav={navigationObject} />
        </div>
      </Layout>
    );
  }
}

export default App;
