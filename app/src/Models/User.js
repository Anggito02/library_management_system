const path = require('path');
const {DataTypes, Model} = require('sequelize');
const {sequelize} = require(path.resolve('config', 'sequelize.config.js'));

class User extends Model {
  static associate(models) {
    User.hasMany(models.BookLoan, {
      foreignKey: 'user_id',
      as: 'book_loan',
    });
    User.belongsTo(models.RefreshToken, {
      foreignKey: 'username',
      as: 'refresh_token',
    });
  }
}

User.init({
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
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

module.exports = User;
