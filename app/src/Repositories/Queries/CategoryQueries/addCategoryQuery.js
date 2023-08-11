const path = require('path');

const Category = require(path.resolve('app', 'src', 'Models', 'Category.js'));

const addCategoryQuery = async (categoryDto) => {
  try {
    const result = await Category.create({
      category_name: categoryDto.categoryName,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = addCategoryQuery;
