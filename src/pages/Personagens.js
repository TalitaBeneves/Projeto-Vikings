import React from 'react';

import Navbar from '../components/navbar/Navbar';
import FullPerson from '../components/person/FullPerson';
import Hr from '../components/hr/Hr';
import Footer from '../components/footer/Footer';

const Personagens = () => {
  return (
    <div>
      <Navbar />
      <FullPerson /> <br/>
      <Hr />
      <Footer />
    </div>
  )
}

export default Personagens;
