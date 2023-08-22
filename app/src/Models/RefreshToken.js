const path = require('path');
const {DataTypes, Model} = require('sequelize');
const {sequelize} = require(path.resolve('config', 'sequelize.config.js'));

class RefreshToken extends Model {
  static associate(models) {
    RefreshToken.belongsTo(models.User, {
      foreignKey: 'username',
      as: 'user',
    });
  }
}

RefreshToken.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING(20),
  },
  token: {
    allowNull: false,
    type: DataTypes.STRING(500),
  },
}, {
  sequelize,
  modelName: 'RefreshToken',
  tableName: 'refresh_tokens',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = RefreshToken;
