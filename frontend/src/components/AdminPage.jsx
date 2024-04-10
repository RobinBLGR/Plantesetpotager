// components/AdminPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/admin/data', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.message}</h2>
          <p>Utilisateur: {data.user}</p>
          {/* Affichez d'autres données de la page d'administration ici */}
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default AdminPage;
