const express = require('express');
const { PORT } = require('./config');
// const { databaseConnection } = require('./database');

const expressApp = require('./express-app');

const errorHandler = require('./utils/errors');

async function StartServer() {
  const app = express();

  // await databaseConnection();

  // catch all errors
  errorHandler(app);

  app
    .listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    })
    .on('error', (err) => {
      console.log(err);
      process.exit();
    });
}

StartServer();
