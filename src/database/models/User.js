const Sequelize = require('sequelize');

module.exports = sequelize.define('User', {
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
});
