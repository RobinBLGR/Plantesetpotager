// routes/admin.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'email est déjà utilisé
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel administrateur
    const newAdmin = new Admin({
      email,
      password: hashedPassword
      // Vous pouvez ajouter d'autres champs spécifiques à l'administrateur ici si nécessaire
    });

    // Enregistrer l'administrateur dans la base de données
    await newAdmin.save();

    res.status(201).json({ message: 'Compte administrateur créé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création du compte administrateur.' });
  }
});

module.exports = router;
