const express = require('express');
const router = express.Router();
const calendarioController = require('../controllers/calendarioController');

router.get('/calendario', calendarioController.getAllCalendario);
router.put('/calendario/:id', calendarioController.updateEstado);

module.exports = router;