const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'votre_clé_secrète'; // Remplacez 'votre_clé_secrète' par une chaîne aléatoire et sécurisée

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Vérifier la validité des données d'entrée
    // Ici, vous pouvez utiliser express-validator ou d'autres méthodes de validation

    // Générer un sel sécurisé pour le hachage des mots de passe
    const salt = await bcrypt.genSalt(10);

    // Hacher le mot de passe avec le sel
    const hashedPassword = await bcrypt.hash(password, salt);

    // Créer un nouvel utilisateur
    const newUser = new User({
      email,
      password: hashedPassword
    });

    // Enregistrer l'utilisateur en base de données
    await newUser.save();

    res.status(201).json({ message: 'Utilisateur créé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de l\'utilisateur.' });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Rechercher l'utilisateur dans la base de données
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
    }

    // Vérifier si le mot de passe est correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
    }

    // Générer un token JWT
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
  }
};
