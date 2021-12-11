import React from 'react';
import { Link } from 'react-router-dom';

import './about.css';

const About = () => {
  return (
    <>
       <h1 className="h1_sobre">SOBRE</h1> <br />
    
      <div className="container">
        <div className="card__about">
          <p className="text">
            Viking é um termo habitualmente usado para se referir aos exploradores, guerreiros, comerciantes e piratas nórdicos (escandinavos) que invadiram, exploraram e colonizaram grandes áreas da Europa e das ilhas do Atlântico Norte a partir do final do século VIII até ao século XI.
          </p>
          <br />
          <p className="text">
            Os vikings usavam dracares para viajar do Próximo Oriente, como Constantinopla e o rio Volga, na Rússia, até o extremo ocidente, como a Islândia, Groenlândia e Terra Nova, e até o sul de Alandalus. Este período de expansão viking - conhecidos como a "era viking" - constitui uma parte importante da história medieval da Escandinávia, Grã-Bretanha, Irlanda e do resto da Europa em geral.
          </p>
          <br />
          <p className="text">
            As concepções populares dos vikings geralmente diferem do complexo quadro que emerge da arqueologia e das fontes escritas. A imagem romantizada dos vikings como bons selvagens germânicos começaram a fincar suas raízes no século XVIII e isso evoluiu e tornou-se amplamente propagado durante a revitalização viking do século XIX. 
          </p>
        </div>
      </div>  
        <div className="button__person">
        <Link to="/sobre">
          <button>Saiba Mais</button>
        </Link> 
    </div>
    </>
  );
}

export default About;
