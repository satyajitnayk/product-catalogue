const Sequelize = require('sequelize');
const {
  DATABASE_HOST,
  DATABASE_PASSWORD,
  DATABASE_USERNAME,
  DATABASE_PORT,
} = require('../config');

const sequelize = new Sequelize({
  database: 'blog_db',
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

global.sequelize = sequelize;
module.exports = sequelize;
