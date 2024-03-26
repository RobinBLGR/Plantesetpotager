// Footer.js
import React from 'react';
import '../styles/footer.css'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer>
      <div className='footer__gauche'>
      <img src={logo} alt='logo du site plantes et potager' />
      </div>
      <div className='footer__droit'>
        <h4>Menu</h4>
        <ul>
          <li>Lien</li>
          <li>Lien</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;