import Head from 'next/head'

const Hero = (props) => (
  <article className="hero">

    <Head>
      <link rel='stylesheet' href='/static/css/hero.css' />
    </Head>

    <section className='landing'>
      <div className='landingInfo'>
        <h1 className='landingTitle'>{props.content.hero.title}</h1>
        <p className='landingAddress'>{props.content.hero.line1} <span>{props.content.hero.year}</span></p>
        <p>{props.content.hero.address}</p>
        <p>{props.content.hero.date}</p>
      </div>
    </section>
    <section className='info'>
      <h2 className='infoTitle'>{props.content.info.title}</h2>
      <p>{props.content.info.content}</p>
      <p>{props.content.info.footnote}</p>
    </section>
  </article>
)

export default Hero
