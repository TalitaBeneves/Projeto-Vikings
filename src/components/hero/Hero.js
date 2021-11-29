import React from 'react';
import Button from '../button/Button';

import vikings from '../../img/thumb.jpg';

import './hero.css';

const Hero = () => {
  return (
      <div className="hero">
        <h1>Vikings</h1>
        <p> navegadores nórdicos que <br/>exploram - e conquistam - novos territórios nos tempos medievais.</p><br/>
        <p>Primeiro episódio: 3 de março de 2013 <br/>
          Episódio final: 30 de dezembro de 2020 <br/>
          Gêneros: Guerra, Drama, Obra de Época, Aventura, Ficção de aventura, Ação <br/>
          Emissoras originais: Amazon Prime Video, History
          Spin-off: Vikings: Valhalla
        </p>
      </div>
  )
}

export default Hero;
