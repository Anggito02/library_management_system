const path = require('path');
const {DataTypes, Model} = require('sequelize');
const {sequelize} = require(path.resolve('config', 'sequelize.config.js'));

class BookLoan extends Model {
  static associate(models) {
    BookLoan.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    BookLoan.belongsTo(models.Book, {
      foreignKey: 'book_id',
      as: 'book',
    });
  }
}

BookLoan.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  start_date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  end_date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  overdue: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'BookLoan',
  tableName: 'book_loans',
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});
