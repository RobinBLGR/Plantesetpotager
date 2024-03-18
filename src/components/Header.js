// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

function Header() {
  return (
    <header>
      <h1>Plantes et<br></br> potager</h1>
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