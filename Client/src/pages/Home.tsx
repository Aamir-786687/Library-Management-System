import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import BgImage from '../components/bgImage';  
import News from '../components/News';
// import PhotoGallery from '../components/PhotoGallery';
import PopularBooks from '../components/PopularBooks';
import RecentAddedBooks from '../components/RecentAddedBooks';
import ReservedBooks from '../components/ReservedBooks';
import Stats from '../components/Stats';
import WelcomeBox from '../components/WelcomeBox';

const Home: React.FC = () => {
  return (
    <div id="home">
      <BgImage />
      <WelcomeBox />
      <About />
      <Stats />
      <RecentAddedBooks />
      <PopularBooks />
      <ReservedBooks />
      <News />
      {/* <PhotoGallery /> */}
      <Footer />
    </div>
  );
};

export default Home;
