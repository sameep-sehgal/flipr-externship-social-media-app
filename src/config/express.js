const express = require('express');
const cors = require('cors');
const routes = require('../api/v1/routes');

/**
* Express instance
* @public
*/
const app = express();

//Send json response
app.use(express.json())

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
app.use('/api/v1', routes);

module.exports = app;