const path = require('path');

// controllers.js
const homeController = (req, res) => {
    // Your logic here
    res.sendFile(path.join(__dirname, '../views/index.html'));
};

module.exports = {
    homeController,
};