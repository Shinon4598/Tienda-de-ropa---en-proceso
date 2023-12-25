// staticRoutes.js
const express = require('express');
const path = require('path');
const router = express.Router();
const { homeController } = require('../controllers/globalcontroller.js');  

// Ruta para archivos estáticos (por ejemplo, CSS)
router.use('/', express.static(path.join(__dirname, '../public')));

// Rutas para Bootstrap y Bootstrap Icons
router.get('/home', homeController);  // Use homeController directly
router.use('/node_modules/bootstrap/dist', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
router.use('/node_modules/bootstrap-icons/font', express.static(path.join(__dirname, '../node_modules/bootstrap-icons/font')));

module.exports = router;
