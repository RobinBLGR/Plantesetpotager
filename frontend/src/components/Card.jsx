import React from 'react';
import '../styles/Card.css';
import datasPlantes from '../datas/datasPlantes.json';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <>
      {datasPlantes.plantes.map((plante) => (
        <div key={plante.id} className="card" data-tooltip={plante.nom}>
          <Link to={`/fiche/${plante.nom}`}>
            <img src={plante.image_home} alt={plante.nom} />
          </Link>
        </div>
      ))}
    </>
  );
}

export default Card;