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
      created_at: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('product_categories');
  },
};
