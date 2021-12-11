import React from 'react';

import { Link } from 'react-router-dom';

import './button.css';

const Button = () => {
  return (
    <div className="button__person">
      <Link to="/personagens">
        <button>Mais Personagens</button>
      </Link>
    </div>
  )
}

export default Button;
