const Sequelize = require('sequelize');
const {
  DATABASE_HOST,
  DATABASE_PASSWORD,
  DATABASE_USERNAME,
} = require('../config');

const sequelize = new Sequelize(
  'product_catalogues',
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: 'mysql',
    operatorsAlias: false,
  }
);

module.exports = sequelize;
global.sequelize = sequelize;
