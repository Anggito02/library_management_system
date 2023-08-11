const path = require('path');
const {DataTypes, Model} = require('sequelize');
const {sequelize} = require(path.resolve('config', 'sequelize.config.js'));

class BookCategory extends Model {
  static associate(models) {
    BookCategory.belongsTo(models.Book, {
      foreignKey: 'book_id',
      as: 'book',
    });
    BookCategory.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

BookCategory.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  book_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'Book',
      key: 'id',
    },
  },
  category_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'Category',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'BookCategory',
  tableName: 'book_category',
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

module.exports = BookCategory;
