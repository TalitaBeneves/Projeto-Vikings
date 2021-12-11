import React from 'react';

import Button from '../button/Button';

import './person.css';

const Person = () => {
  return (
  <>
      <h1 className="h1_custon"> PERSONAGENS </h1>
      
    <div className="conteiner_person">
    <div className="card_person" id="floki">
      <div className="card-content">
        <h2 className="card-title">Floki</h2> <br/>
        <p className="card-body-person">
          Floki Vilgerðarson é um construtor de barcos e trapaceiro incorrigível, que por acaso também é o excêntrico e amigo mais próximo de Ragnar Lothbrok. Ele é o marido de Helga e eles têm uma filha chamada Angrboda.
        </p>
      </div>
      </div>
      <div className="card_person" id="ivar">
        <div className="card-content">
          <h2 className="card-title">Ivar</h2> <br/>
          <p className="card-body-person">
           Ivar, o Desossado, também chamado Ivar, Filho de Ragnar, foi líder Viking e comandante militar que invadiu o que é hoje a Inglaterra. Segundo a Saga de Ragnar Calças Peludas, foi filho de Ragnar Calças Peludas e Aslauga.
          </p> 
        </div>
      </div>
      <div className="card_person" id="bjorn">
        <div className="card-content">
          <h2 className="card-title">Bjorn</h2> <br/>
          <p className="card-body-person">
            Björn, também conhecido como Bjorn Ironside, é o Rei de Kattegat. Ele é filho de Ragnar Lothbrok e Lagertha e o mais velho dos muitos filhos de Ragnar.
          </p>
        </div>
      </div>
      <div className="card_person" id="ragnar">
        <div className="card-content">
          <h2 className="card-title">Ragnar</h2> <br/>
          <p className="card-body-person">
           Ragnar é um fazendeiro e guerreiro viking que anseia por saquear os rumores de riquezas da desconhecida Inglaterra. Sua primeira esposa é Lagertha, e eles têm dois filhos chamados Gyda e Bjorn. 
          </p>
        </div>
      </div>
    </div>
      <Button />
  </>
  )
}

export default Person;
