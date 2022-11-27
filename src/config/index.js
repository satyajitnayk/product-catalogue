const dotEnv = require('dotenv');

if (process.env.NODE_ENV !== 'prod') {
  const configFile = `./.${process.env.NODE_ENV}.env`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT || 3001,
  APP_SECRET: process.env.APP_SECRET,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PORT: 3306,
  DATABASE_URL: process.env.DATABASE_URL,
  development: {
    url: process.env.DATABASE_URL,
    dialect: process.env.DATABASE_DIALECT || 'mysql',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
};
