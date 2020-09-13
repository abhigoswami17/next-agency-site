import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Logo />
      <Nav />
      <style jsx>{`
        .header-wrapper {
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 600px) {
          .header-wrapper {
            display: block;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
