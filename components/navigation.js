import Head from 'next/head';

const Navigation = props => {
  const { previousRoom, nextRoom } = props.nav;

  return (
    <div class="navigation">
      <Head>
        <link rel="stylesheet" href="/static/css/navigation.css" />
      </Head>
      <div className="navgroup">
        <a className="link" href={previousRoom.link}>
          <div className="arrowAndText">
            <img className="arrow" src="/static/images/leftArrow.svg" />
            <div>{previousRoom.text}</div>
          </div>
          <div className="roomName">{previousRoom.name}</div>
        </a>
      </div>
      <div className="navgroup">
        <a className="link" href={nextRoom.link}>
          <div className="arrowAndText">
            <img className="arrow" src="/static/images/rightArrow.svg" />
            <div>{nextRoom.text}</div>
          </div>
          <div className="roomName">{nextRoom.name}</div>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
