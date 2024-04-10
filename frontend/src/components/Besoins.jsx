import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/Besoins.css'

function Besoins({ besoinEau, exposition }) {
  function renderBesoinEau(niveau) {
    if (niveau === 'Faible') {
      return (
        <>
          <FontAwesomeIcon icon={faTint} className="blue-drop" />
          <FontAwesomeIcon icon={faTint} className="gray-drop" />
          <FontAwesomeIcon icon={faTint} className="gray-drop" />
        </>
      );
    } else if (niveau === 'Moyen') {
      return (
        <>
          <FontAwesomeIcon icon={faTint} className="blue-drop" />
          <FontAwesomeIcon icon={faTint} className="blue-drop" />
          <FontAwesomeIcon icon={faTint} className="gray-drop" />
        </>
      );
    } else if (niveau === 'Élevé') {
      return (
        <>
          <FontAwesomeIcon icon={faTint} className="blue-drop" />
          <FontAwesomeIcon icon={faTint} className="blue-drop" />
          <FontAwesomeIcon icon={faTint} className="blue-drop" />
        </>
      );
    } else {
      return null;
    }
  }

  function renderExposition(niveau) {
    if (niveau === 'Ombragée') {
      return (
        <>
          <FontAwesomeIcon icon={faSun} className="gray-sun" />
          <FontAwesomeIcon icon={faSun} className="gray-sun" />
          <FontAwesomeIcon icon={faSun} className="gray-sun" />
        </>
      );
    } else if (niveau === 'Mi-ombragée') {
      return (
        <>
          <FontAwesomeIcon icon={faSun} className="yellow-sun" />
          <FontAwesomeIcon icon={faSun} className="gray-sun" />
          <FontAwesomeIcon icon={faSun} className="gray-sun" />
        </>
      );
    } else if (niveau === 'Ensoleillée') {
      return (
        <>
          <FontAwesomeIcon icon={faSun} className="yellow-sun" />
          <FontAwesomeIcon icon={faSun} className="yellow-sun" />
          <FontAwesomeIcon icon={faSun} className="yellow-sun" />
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="besoins">
      <div className="besoin__eau">
        <div className="besoin__titre">Besoin en eau :</div>
        <div className="besoin__icones">{renderBesoinEau(besoinEau)}</div>
      </div>

      <div className="exposition">
        <div className="exposition__titre">Exposition :</div>
        <div className="exposition__icones">{renderExposition(exposition)}</div>
      </div>
    </div>
  );
}

export default Besoins;