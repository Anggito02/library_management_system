const path = require('path');

const Category = require(path.resolve('app', 'src', 'Models', 'Category.js'));

const getCategoryQuery = async (categoryDto) => {
  try {
    const result = await Category.findAll({
      where: {
        category_name: categoryDto.categoryName,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = getCategoryQuery;
