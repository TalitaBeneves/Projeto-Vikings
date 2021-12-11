import React from 'react';

import Navbar from '../components/navbar/Navbar';
import FullAbout from '../components/about/FullAbout';
import Hr from '../components/hr/Hr';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../components/scrollTop/ScrollToTop';

const Sobre = () => {
  return (
    <div>
     <ScrollToTop />
     <Navbar />
     <FullAbout />
     <Hr />
     <Footer />
    </div>
  )
}

export default Sobre
