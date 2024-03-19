import React from 'react';
import '../styles/style.css';
import '../styles/home.css';
import Card from './Card';

function Home() {
  return (
    <div>
      <h2>Accueil</h2>
      <p>Bienvenue sur la page d'accueil.</p>
      <div className="cards">
        <Card />
      </div>
    </div>
  );
}

export default Home;
