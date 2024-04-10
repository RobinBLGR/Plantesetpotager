// AdminSignupPage.js

import React, { useState } from 'react';
import axios from 'axios';

const AdminSignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:4000/api/admin/signup', { email, password });
      if (response && response.data) {
        console.log(response.data);
        // Redirection vers une page de confirmation ou de connexion, par exemple
      } else {
        console.error("La réponse de la requête est invalide.");
        setError('Une erreur est survenue lors de l\'inscription.');
      }
    } catch (error) {
      console.error(error.response.data);
      setError('Une erreur est survenue lors de l\'inscription.');
    }
  };
  

  return (
    <div>
      <h2>Inscription Administrateur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmer le mot de passe:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AdminSignupPage;
