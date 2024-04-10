import React from 'react';
import { useParams } from 'react-router-dom';
import recettesData from '../datas/recettes.json';
import '../styles/recettes.css';

function Recettes() {
  const { plante } = useParams();
  const recettes = recettesData[plante] || [];

  if (recettes.length === 0) {
    return <div className='aucune'>Aucune recette disponible pour {plante}. N'hésitez pas à nous contacter pour nous en proposer une !</div>;
  }

  return (
    <div>
      <h2>{plante} : découvrez nos recettes gourmandes !</h2>
      {recettes.map((recette, index) => (
        <div key={index} className='recettes'>
          <div className='livre__recette'>
            <div className='legende__recette'>
              <div className='image__titre'>
                <img src={recette.image} alt={recette.nom} />
                <div className='nom__description'>
                  <h3>{recette.nom}</h3>
                  <span>{recette.description}</span>
                </div>
              </div>
              <p>{recette.parts}</p>
              <ul>
                {recette.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className='etapes__recette'>
              <ol>
                {recette.etapes.map((etape, i) => (
                  <li key={i} className='etape'>{etape}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recettes;