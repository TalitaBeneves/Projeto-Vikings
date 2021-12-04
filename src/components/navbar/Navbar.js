import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu, AiOutlineClose } from 'react-icons/all';

import Button from '../button/Button';

import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
  <>
    <nav className="navbar">
      <Link to='/' className="navbar-logo">
          VIKNGS
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <AiOutlineClose/> : <MdOutlineMenu />}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre" className="nav-links" onClick={closeMobileMenu}>
            SOBRE
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/personagens" className="nav-links" onClick={closeMobileMenu}>
            PERSONAGENS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/videos" className="nav-links" onClick={closeMobileMenu}>
            VÍDEOS 
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/midias" className="nav-links" onClick={closeMobileMenu}>
              MÍDIAS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
            Entre 
          </Link>
        </li>
      </ul>
      <Button />
    </nav>
  </>
  )
}

export default Navbar;
