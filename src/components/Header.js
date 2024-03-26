// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <img src={logo} alt='logo plantes et potager' />
        <nav>
                 <li>
                 <Link to="/" className="nav__link">Accueil</Link>
                </li>
                <li>
                    <Link to="/about" className="nav__link">À propos</Link>
                 </li>
        </nav>
    </header>
  );
}

export default Header;