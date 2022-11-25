'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('users', {
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(20),
      },
      email: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('users');
  },
};
