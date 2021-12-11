import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';


import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisble, setIsVisble] = useState(false);

  const toggleVisiblility = () => {
    if (window.pageYOffset > 100) {
      setIsVisble(true);
    } else {
      setIsVisble(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisiblility);

    return () => {
      window.removeEventListener('scroll', toggleVisiblility);
    }
  }, []);


  return (
    <div className='scroll-to-top'>
      <FaArrowAltCircleUp onClick={scrollToTop} id="icon_scroll" />
    </div>
  )
}

export default ScrollToTop;
