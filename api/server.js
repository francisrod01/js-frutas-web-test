const express = require('express');
const db = require('sqlite');
const Promise = require('bluebird');

const app = express();
const port = process.env.PORT || 5000;

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
    console.log('Node.js API connected to port: ', port);
    app.listen(port);
  });
