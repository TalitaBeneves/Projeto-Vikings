import React from 'react';

import Navbar from "../components/navbar/Navbar";
import Hero from '../../src/components/hero/Hero';
import Person from '../../src/components/person/Person';
import About from "../components/about/About";
import Trailer from "../components/trailer/Trailer";
import Footer from "../components/footer/Footer";
import Hr from "../components/hr/Hr";
import ScrollToTop from '../components/scrollTop/ScrollToTop';

const Home = () => {
  return (
    <>
    <div>
      <Navbar />
      <Hr />
      <Hero />
      <Hr />
      <Person /> <br />
      <ScrollToTop />
      <About /> <br /> 
      <Trailer /> <br /> <br />
      <Hr />
      <Footer />
    </div>
  </>
  )
}

export default Home;
