import React from 'react';

import './about.css';

const About = () => {
  return (
    <>
      <h1>SOBRE</h1> <br />
      <div className="container">
      <div className="card__about">
        <p className="text">
          Viking é um termo habitualmente usado para se referir aos exploradores, guerreiros, comerciantes e piratas nórdicos (escandinavos) que invadiram, exploraram e colonizaram grandes áreas da Europa e das ilhas do Atlântico Norte a partir do final do século VIII até ao século XI.
        </p>
        <p className="text">
          Os vikings usavam dracares para viajar do Próximo Oriente, como Constantinopla e o rio Volga, na Rússia, até o extremo ocidente, como a Islândia, Groenlândia e Terra Nova, e até o sul de Alandalus. Este período de expansão viking - conhecidos como a "era viking" - constitui uma parte importante da história medieval da Escandinávia, Grã-Bretanha, Irlanda e do resto da Europa em geral.
        </p>
        <p className="text">
          As concepções populares dos vikings geralmente diferem do complexo quadro que emerge da arqueologia e das fontes escritas. A imagem romantizada dos vikings como bons selvagens germânicos começaram a fincar suas raízes no século XVIII e isso evoluiu e tornou-se amplamente propagado durante a revitalização viking do século XIX. 
        </p>
        <p className="text">
        A fama dos vikings de brutos e violentos ou intrépidos aventureiros devem muito ao mito viking moderno que tomou forma no início do século XX. As atuais representações populares são tipicamente muito clichês, apresentando os vikings como caricaturas.
        </p>
        <p className="text">
        Eles também fundaram povoados e fizeram comércio pacificamente. A imagem histórica dos vikings mudou um pouco ao longo dos tempos, e hoje já se admite que eles tiveram uma enorme contribuição na tecnologia marítima e na construção de cidades.
        </p>
      </div>
      </div>
    </>
  );
}

export default About;
