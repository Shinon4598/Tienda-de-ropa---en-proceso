// staticRoutes.js
const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para archivos estáticos (por ejemplo, CSS)
router.use('/', express.static(path.join(__dirname, '../public')));

// Rutas para Bootstrap y Bootstrap Icons
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.use('/node_modules/bootstrap/dist', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
router.use('/node_modules/bootstrap-icons/font', express.static(path.join(__dirname, '../node_modules/bootstrap-icons/font')));

module.exports = router;