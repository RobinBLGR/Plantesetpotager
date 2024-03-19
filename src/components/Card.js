import React from 'react';
import '../styles/Card.css';
import datasPlantes from '../datas/datasPlantes.json';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <>
      {datasPlantes.plantes.map((plante) => (
        <div key={plante.id} className="card">
          <Link to={`/fiche/${plante.nom}`}>
            <img src={plante.image} alt={plante.nom} />
          </Link>
          <h3>{plante.nom}</h3>
        </div>
      ))}
    </>
  );
}

export default Card;