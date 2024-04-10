import React from 'react';
import { Link } from 'react-router-dom';
import recettes from '../datas/recettes.json';
import '../styles/AfficherRecettes.css';

function AfficherRecettes() {
  return (
    <div className='cadre_recettes'>
      <h2>Retrouvez ci-dessous toutes nos recettes végétariennes :</h2>
      {Object.entries(recettes).map(([legume, recettesLegume]) => (
        <div className='cadre_legume' key={legume}>
          <h3>{legume} : nos recettes</h3>
          <div className="liste__recettes">
            {recettesLegume.map((recette) => (
              <div key={recette.id} className="recette__item">
                <Link to={`/recettes/${legume}`}>
                  <div className="recette__content">
                    <h4>{recette.nom}</h4>
                    <img src={recette.image} alt={recette.nom} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AfficherRecettes;