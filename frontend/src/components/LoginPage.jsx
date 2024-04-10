import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      const token = response.data.token;

      // Stocker le token dans le localStorage
      localStorage.setItem('token', token);

      // Rediriger vers la page d'administration
      window.location.href = '/admin';
    } catch (error) {
      setError('Identifiant ou mot de passe incorrect');
    }
  };

  return (
    <div>
      <h2>Page d'authentification</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;