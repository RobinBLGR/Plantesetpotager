// Footer.js
import React from 'react';
import '../styles/footer.css'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer>

      <div className='footer__colonne'>
      <div className='footer__gauche'>
      <img src={logo} alt='logo du site plantes et potager' />
      </div>

      <div className='footer__centre'>
        <h4>Menu</h4>
        <ul>
          <li><a href="#">A propos</a></li>
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Nous contacter</a></li>
        </ul>
      </div>

      <div className='footer__droit'>
        <h4>Partenaires</h4>
        <ul>
          <li><a href="https://www.flaticon.com/fr/" title="icônes gratuites">Flaticon</a></li>
          <li><a href="https://www.pexels.com/fr-fr/" title="photos gratuites">Pexels</a></li>
        </ul>
      </div>
      </div>

      <div className='copyright'>
        2024 - Plantes et potager © - Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;