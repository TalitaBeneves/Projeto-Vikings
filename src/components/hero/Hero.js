import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import './hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero" to="/">
        <div className="social">
          <ul>
            <li>
              <a  href="https://www.instagram.com/talita_beneves/" rel="noreferre" target="_blank" ><FaInstagram /> </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/talitabeneves/" rel="noreferre" target="_blank" ><FaLinkedin /> </a>
            </li>
            <li>
              <a href="https://github.com/TalitaBeneves" rel="noreferre" target="_blank" ><FaGithub /> </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Hero;
