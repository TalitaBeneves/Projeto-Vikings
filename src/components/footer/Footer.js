import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Vikings from '../../img/logo_footer.png';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
    <div className="social__footer">
          <ul>
            <li>
              <a href="https://www.instagram.com/talita_beneves/" rel="noreferre" target="_blank" ><FaInstagram /> </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/talitabeneves/" rel="noreferre" target="_blank" ><FaLinkedin /> </a>
            </li>
            <li>
              <a href="https://github.com/TalitaBeneves" rel="noreferre" target="_blank" ><FaGithub /> </a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img src={Vikings} alt="vikings" width="340px" id="vikings"/>
        </Link>
          <p className="text__footer">©Talita Beneves 2021</p>
    </div>
  );
}

export default Footer;
