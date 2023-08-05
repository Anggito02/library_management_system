const path = require('path');
const {DataTypes, Model} = require('sequelize');
const {sequelize} = require(path.resolve('config', 'sequelize.config.js'));

class Book extends Model {
  static associate(models) {
    Book.hasMany(models.BookCategory, {
      foreignKey: 'book_id',
      as: 'book_category',
    });
  }
}

Book.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  author: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  total_pages: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}, {
  sequelize,
  modelName: 'Book',
  tableName: 'books',
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

module.exports = Book;
