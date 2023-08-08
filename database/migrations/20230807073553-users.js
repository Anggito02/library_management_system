'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: {
        allowNull: true,
        unique: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
      },
      banned: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      ban_days: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      lending: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      // Timestamps
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal(
            'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
        ),
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  },
};
