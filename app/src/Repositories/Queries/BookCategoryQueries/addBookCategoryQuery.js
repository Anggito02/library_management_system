const path = require('path');

const BookCategory = require(path.resolve('app', 'src', 'Models', 'Book_Category.js'));

const addBookCategoryQuery = async (bookCategoryDto) => {
  try {
    const result = await BookCategory.create({
      book_id: bookCategoryDto.bookId,
      category_id: bookCategoryDto.categoryId,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = addBookCategoryQuery;
