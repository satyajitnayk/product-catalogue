const Sequelize = require('sequelize');

module.exports = sequelize.define('ProductCategory', {
  category_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  category_name: {
    type: Sequelize.STRING(20),
  },
  details: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
});
