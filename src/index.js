const express = require('express');
const { PORT } = require('./config');
const expressApp = require('./express-app');

const errorHandler = require('./utils/errors');

async function StartServer() {
  const app = express();

  // database Connection
  require('./database/connection');

  expressApp(app);

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
