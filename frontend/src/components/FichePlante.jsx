import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import Besoins from './Besoins';
import datasPlantes from '../datas/datasPlantes.json';
import '../styles/fichePlante.css';
import EnBref from '../assets/enbref.png';
import Decouvrez from '../assets/fiche/decouvrez-recettes.png'

function FichePlante() {
  const { nom } = useParams();
  const plantes = datasPlantes.plantes;
  const indexPlanteActuelle = plantes.findIndex((plante) => plante.nom === nom);

  const indexPlanteSuivante = (indexPlanteActuelle + 1) % plantes.length;
  const indexPlantePrecedente =
    (indexPlanteActuelle - 1 + plantes.length) % plantes.length;

  const planteSuivante = plantes[indexPlanteSuivante];
  const plantePrecedente = plantes[indexPlantePrecedente];

  const plante = datasPlantes.plantes.find((p) => p.nom === nom);

  return (
    <div>
      <Helmet>
        <title>Fiche de {plante.nom}</title>
        <meta name="description" content={plante.description} />
      </Helmet>
      <div className="fiche">
        <h2>{plante.nom} : tout savoir sur ses besoins au potager</h2>
        <div className="fiche__detaillee">
          <div className='legume__decouvrez'>
            <img src={plante.image_fiche} alt={plante.nom} />
          <Link to={`/recettes/${plante.nom}`}><img src={Decouvrez} /></Link>
          </div>
          <div className="bref__description">
            <div className="en__bref">
              <img src={EnBref} />
              <div className="petit__bref">
                <Besoins besoinEau={plante.besoin_eau} exposition={plante.exposition} />
                <div className="periode-semis">
                <h3 className="periode-semis__titre">Période de semis :</h3>
                 {plante.periode_semis}
                </div>
                <div className="periode-semis">
                  <h3 className="periode-semis__titre">Période de récolte :</h3>
                  {plante.periode_recolte}
                </div>
              </div>
            </div>
            <div className="plante__description">{plante.legume_description}</div>
            <div className='titre__description'>Type de plante :</div>
            <div className="plante__description">{plante.type_description}</div>
            <div className='titre__description'>Sol idéal :</div>
            <div className="plante__description">{plante.culture_description}</div>
            <div className='titre__description'>Conseils culture :</div>
            <div className="plante__description__fin">{plante.distance_description}</div>
          </div>
        </div>
      </div>

      <Link to={`/recettes/${plante.nom}`} className='decouvrez__texte'>Découvrez nos recettes en cliquant ici</Link>

      <div className="fiche__navigation">
        <Link to={`/fiche/${plantePrecedente.nom}`}>
          <img src={plantePrecedente.image_home} alt={plantePrecedente.nom} />
        </Link>
        <span>Nos autres fiches</span>
        <Link to={`/fiche/${planteSuivante.nom}`}>
          <img src={planteSuivante.image_home} alt={planteSuivante.nom} />
        </Link>
      </div>
    </div>
  );
}

// rajouter distance plants, type de plante (annuelle, bisannuelle, vivave), conseil de culture et recettes/particularité culinaire

export default FichePlante;