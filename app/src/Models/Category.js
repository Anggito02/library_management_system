const path = require('path');
const {DataTypes, Model} = require('sequelize');
const {sequelize} = require(path.resolve('config', 'sequelize.config.js'));

class Category extends Model {
  static associate(models) {
    Category.hasMany(models.BookCategory, {
      foreignKey: 'category_id',
      as: 'book_category',
    });
  }
}

Category.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  category_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'Category',
  tableName: 'categories',
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

module.exports = Category;
