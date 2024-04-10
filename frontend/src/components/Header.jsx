import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt='logo plantes et potager' />
      <nav>
          <li>
            <Link to="/" className="nav__link">Accueil</Link>
          </li>
          <li>
            <Link to="/about" className="nav__link">Fiches plantes</Link>
          </li>
          <li>
            <Link to="/recettes" className="nav__link">Fiches recettes</Link>
          </li>
          <li>
            <Link to="/about" className="nav__link">À propos</Link>
          </li>
          <li>
            <Link to="/loginPage" className="nav__link">Login</Link>
          </li>
      </nav>
    </header>
  );
}

export default Header;