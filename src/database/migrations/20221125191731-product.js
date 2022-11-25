'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('products', {
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
        type: Sequelize.STRING(25),
      },
      details: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      price: Sequelize.FLOAT,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('products');
  },
};
