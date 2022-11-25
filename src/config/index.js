const dotEnv = require('dotenv');

if (process.env.NODE_ENV !== 'prod') {
  const configFile = `./.${process.env.NODE_ENV}.env`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT || 3001,
  DB_URL: process.env.DB_URL || '',
  APP_SECRET: process.env.APP_SECRET,
};
