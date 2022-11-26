'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('product_categories', {
      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(20),
      },
      details: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('product_categories');
  },
};
