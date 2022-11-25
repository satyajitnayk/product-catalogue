const Sequelize = require('sequelize');

module.exports = sequelize.define('Product', {
  product_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  category_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  product_name: {
    type: Sequelize.STRING(20),
  },
  details: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  price: Sequelize.FLOAT,
});
