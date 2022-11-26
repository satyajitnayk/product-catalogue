const Sequelize = require('sequelize');
const sequelize = require('../connection');

module.exports = sequelize.define(
  'product_categories',
  {
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
  },
  { timestamps: false }
);
