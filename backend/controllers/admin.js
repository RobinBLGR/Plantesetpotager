// controllers/admin.js

// Exemple de méthode pour récupérer des données pour la page d'administration
exports.getAdminData = (req, res, next) => {
    // Vous pouvez éventuellement vérifier l'identifiant de l'utilisateur s'il est nécessaire pour récupérer les données
  
    // Simplement un exemple de données pour la démonstration
    const adminData = {
      message: 'Bienvenue sur la page d\'administration!',
      user: req.userId  // Utilisateur récupéré à partir du token JWT
      // Ajoutez d'autres données nécessaires pour la page d'administration
    };
  
    res.status(200).json(adminData);
  };
  