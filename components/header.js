import Head from 'next/head';

const Header = props => {
  return (
    <header class="nav">
      <Head>
        <link rel="stylesheet" href="/static/css/header.css" />
      </Head>
      <img src="/static/images/logo.png" alt="logo" />
      <li>
        <a href={props.homepageLink}>Info</a>
      </li>
      <li>
        <a href={props.roomsLink}>Stanze</a>
      </li>
      <li>
        <a href={props.curatorsLink}>Curatori</a>
      </li>
      <li>
        <a href={props.partnersLink}>Partners</a>
      </li>
    </header>
  );
};

export default Header;
