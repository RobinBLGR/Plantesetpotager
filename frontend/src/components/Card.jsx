import React from 'react';
import '../styles/Card.css';
import datasPlantes1 from '../datas/datasPlantes1.json';
import datasPlantes2 from '../datas/datasPlantes2.json';
import datasPlantes3 from '../datas/datasPlantes3.json';
import { Link } from 'react-router-dom';

function Card() {
  // Combinez les données de tous les fichiers JSON
  const allPlantes = [
    ...datasPlantes1.plantes,
    ...datasPlantes2.plantes,
    ...datasPlantes3.plantes,
  ];

  return (
    <>
      {allPlantes.map((plante) => (
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
