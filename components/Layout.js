import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, description }) => {
  return (
    <div className='site-wrapper'>
      <Head>
        <title>
          {title ? `${title} | ` : ''}
          Photo Wiz
        </title>
        {description ? <meta name='description' content={description} /> : null}
      </Head>
      <Header />
      <div className='content-wrapper'>{children}</div>
      <Footer />
      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-size: 20px;
          line-height: 1.7;
          font-weight: 400;
          background: #fff;
          color: #454545;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          text-rendering: optimizeLegibility;
        }

        a {
          color: #1b789e;
          text-decoration: none;
        }

        a:hover {
          color: #166281;
        }

        h1,
        h2,
        h3 {
          margin: 40px 0 30px;
        }

        h1 {
          font-size: 42px;
        }

        h2 {
          font-size: 36px;
        }

        p {
          margin: 0 0 10px;
        }

        img {
          max-width: 100%;
        }

        /* Layout */
        .content-wrapper {
          min-height: 600px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Layout;
