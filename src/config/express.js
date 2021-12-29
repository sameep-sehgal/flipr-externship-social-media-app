const express = require('express');
const cors = require('cors');

/**
* Express instance
* @public
*/
const app = express();

//Send json response
app.use(express.json())

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

module.exports = app;