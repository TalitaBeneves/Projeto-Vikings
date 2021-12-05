import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

import './hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero" to="/">
        <h2>Vikings</h2>
        <p> navegadores nórdicos que <br/>exploram - e conquistam - novos territórios nos tempos medievais.</p>
        <p>Primeiro episódio: 3 de março de 2013 <br/>
          Episódio final: 30 de dezembro de 2020 <br/>
          Gêneros: Guerra, Drama, Obra de Época, Aventura, Ficção de aventura, Ação <br/>
          Emissoras originais: Amazon Prime Video, History
          Spin-off: Vikings: Valhalla
        </p>
        <div className="social">
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
      </div>
    </>
  )
}

export default Hero;
