const Legume = require('../models/Legume');

exports.createLegume = (req, res, next) => {
    const legumeObject = JSON.parse(req.body.legume);
    delete legumeObject._id;
    delete legumeObject._userId;
    const legume = new Legume({
        ...legumeObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    legume.save()
    .then(() => { res.status(201).json({message: 'Légume enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
 };

exports.getOneLegume = (req, res, next) => {
  Legume.findOne({
    _id: req.params.id
  }).then(
    (legume) => {
      res.status(200).json(legume);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyLegume = (req, res, next) => {
    const legumeObject = req.file ? {
        ...JSON.parse(req.body.legume),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  
    delete legumeObject._userId;
    Legume.findOne({_id: req.params.id})
        .then((legume) => {
            if (legume.userId != req.auth.userId) {
                res.status(401).json({ message : 'Not authorized'});
            } else {
                Legume.updateOne({ _id: req.params.id}, { ...legumeObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Légume modifié!'}))
                .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
 };

 exports.deleteLegume = (req, res, next) => {
    Legume.findOne({ _id: req.params.id})
        .then(legume => {
            if (legume.userId != req.auth.userId) {
                res.status(401).json({message: 'Not authorized'});
            } else {
                const filename = legume.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Legume.deleteOne({_id: req.params.id})
                        .then(() => { res.status(200).json({message: 'Légume supprimé !'})})
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch( error => {
            res.status(500).json({ error });
        });
 };

exports.getAllLegumes = (req, res, next) => {
  Legume.find().then(
    (legumes) => {
      res.status(200).json(legumes);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};