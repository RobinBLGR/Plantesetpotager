const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Legume = require('./models/legume');

mongoose.connect('mongodb+srv://testvieuxgrimoire:mdptest@vieuxgrimoire.wcghary.mongodb.net/?retryWrites=true&w=majority&appName=VieuxGrimoire',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

// Permet aux requêtes backend et frontend de communiquer entre elles :
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  }); 

  // http://localhost:3000/api/legumes est l'url demandée par le frontend
  app.post('/api/legume', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Légume créé !'
    });
  });

  app.post('/api/legumes', (req, res, next) => {
    const legume = new Legume({
      ...req.body
    });
    legume.save()
      .then(() => res.status(201).json({ message: 'Légume enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

  app.get('/api/legumes/:id', (req, res, next) => {
    Legume.findOne({ _id: req.params.id })
      .then(legume => res.status(200).json(legume))
      .catch(error => res.status(404).json({ error }));
  });

  app.put('/api/legumes/:id', (req, res, next) => {
    Legume.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Légume modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

  app.delete('/api/legumes/:id', (req, res, next) => {
    Legume.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Légume supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });

  app.use('/api/legumes', (req, res, next) => {
    Legume.find()
      .then(legumes => res.status(200).json(legumes))
      .catch(error => res.status(400).json({ error }));
  });

module.exports = app;