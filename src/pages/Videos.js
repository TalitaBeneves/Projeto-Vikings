import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Hr from '../components/hr/Hr';
import Footer from '../components/footer/Footer';
import FullTrailer from '../components/trailer/FullTrailer';
import ScrollToTop from '../components/scrollTop/ScrollToTop';

const Videos = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <FullTrailer /> <br /> <br />
      <Hr /> 
      <Footer />
    </div>
  )
}

export default Videos;
