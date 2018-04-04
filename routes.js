const routes = require('express').Router();

// redirect to index.html on "/"
routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

module.exports = routes;
