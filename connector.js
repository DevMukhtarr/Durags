/**
* This is a file that will later be used to connect all files that will be used in the server.
    i.e routes file, database and other
*/
const express = require('express');
const app = express();
const routes = require('./src/routes');

app.use(routes)


module.exports = app