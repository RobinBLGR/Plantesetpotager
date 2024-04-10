const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const legumesCtrl = require('../controllers/legumes');

router.get('/', legumesCtrl.getAllLegumes);
router.post('/', auth, legumesCtrl.createLegume);
router.get('/:id', legumesCtrl.getOneLegume);
router.put('/:id', auth, legumesCtrl.modifyLegume);
router.delete('/:id', auth, legumesCtrl.deleteLegume);

module.exports = router;