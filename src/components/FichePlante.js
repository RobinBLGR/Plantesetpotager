import React from 'react';
import { useParams } from 'react-router-dom';
import datasPlantes from '../datas/datasPlantes.json';
import '../styles/fichePlante.css';

function FichePlante() {
    const { nom } = useParams();
    const plante = datasPlantes.plantes.find((p) => p.nom === nom);
  
    return (
      <div>
        <h2>{plante.nom}</h2>
        <p>{plante.description}</p>
        <img src={plante.image} alt={plante.nom} />
      </div>
    );
  }
  
  export default FichePlante;
