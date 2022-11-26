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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('products');
  },
};
