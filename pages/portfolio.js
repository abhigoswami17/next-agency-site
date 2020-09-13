import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const Porfolio = () => {
  const images = [];
  const imageCount = 14;

  for (let i = imageCount; i > 0; i--) {
    images.push(`/portfolio/${i}.jpg`);
  }

  return (
    <Layout title="Portfolio">
      <h1>Our Portfolio</h1>
      <Gallery images={images} />
    </Layout>
  );
};

export default Porfolio;
