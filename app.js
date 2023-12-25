const express = require('express');
const path = require('path');
const staticRoutes = require('./routes/index.js');
const app = express();
const port = 3000;

// Ruta base para archivos estáticos (por ejemplo, CSS)
const staticBasePath = path.join(__dirname, './public');
app.use('/', express.static(staticBasePath));

// Rutas para Bootstrap y Bootstrap Icons
app.use('/node_modules/bootstrap/dist', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/node_modules/bootstrap-icons/font', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));

// Rutas definidas en el archivo index.js
app.use('/', staticRoutes);

// Ruta para cualquier otra solicitud, sirve el archivo index.html por defecto
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
