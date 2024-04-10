const mongoose = require('mongoose');

const legumeSchema = mongoose.Schema({
  nom: { type: String, required: true },
  image_home: { type: String, required: true },
  image_fiche: { type: String, required: true },
  description: { type: String, required: true },
  periode_semis: { type: String, required: true },
  periode_recolte: { type: String, required: true },
  besoin_eau: { type: String, required: true },
  exposition: { type: String, required: true },
  distance_plants: { type: Number, required: true },
});

module.exports = mongoose.model('Legume', legumeSchema);    