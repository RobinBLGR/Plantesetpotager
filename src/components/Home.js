import React from 'react';
import '../styles/style.css';
import '../styles/home.css';
import Card from './Card';

function Home() {
  return (
    <div className='accueil'>
      <h2>Accueil</h2>
      <div className='message__accueil'>
      <p>Retrouvez toutes les infos à savoir et les astuces à connaître pour réussir votre potager grâce à nos fiches détaillées.</p>
      <p>Et découvrez également pour chaque légume de quoi les savourer avec nos idées recettes !</p>
      </div>
      <div className="title__cards">
          <h3>Fiches au hasard</h3>
          <div className="cards">
            <Card />
          </div>
        </div>
    </div>
  );
}

export default Home;
