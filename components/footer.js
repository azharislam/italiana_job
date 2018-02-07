import Head from 'next/head'

const Footer = (props) => (
    <footer className="footer">
        <Head>
        <link rel='stylesheet' href='/static/css/footer.css' />
        </Head>
        <section className='body'>
          <p>945 Madison Avenue</p>
          <p>New York, NY 10021</p>
          <p>Phone: 212-731-1675</p>
        </section>
        <section className='copyright'>
          <p> &copy; 2017 Camera Nazionale della Moda Italiana. All rights reserved.</p>
        </section>
    </footer>
)

export default Footer
