const express = require('express');
const bodyParser = require('body-parser');
const db = require('sqlite');
const Promise = require('bluebird');

const app = express();
const port = process.env.PORT || 5000;

// Configure app to use bodyParser
// This will let us get the data from a POST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes for our API.
const router = express.Router();

/* eslint-disable-next-line no-unused-vars */
const fruits = require('./routes/fruits')(router, db);


// CORS middleware
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};
app.use(allowCrossDomain);


// Register our routes.
app.use('/api', router);


Promise.resolve()
  // First, try to open the database.
  .then(() => db.open('./database.sqlite', { Promise }))
  // Update db schema to the latest version using SQL-based migrations.
  .then(() => db.migrate({ force: 'last' }))
  // Display error message if something went wrong.
  /* eslint-disable-next-line no-console */
  .catch(err => console.error('DB connection: ', err.stack))
  // Finally launch the Node.js app.
  .finally(() => {
    /* eslint-disable-next-line no-console */
    app.listen(port, () => console.log('Node.js API connected to port: ', port));
  });
