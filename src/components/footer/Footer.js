import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <ul>
            <li>
              <a href="https://www.instagram.com/talita_beneves/"><FaInstagram /> </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/talitabeneves/"><FaLinkedin /> </a>
            </li>
            <li>
              <a href="https://github.com/TalitaBeneves"><FaGithub /> </a>
            </li>
          </ul>
    </div>
  )
}

export default Footer;
