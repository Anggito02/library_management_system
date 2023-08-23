const path = require('path');

const addBookQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'BookQueries', 'addBookQuery.js'));
const getCategoryQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'CategoryQueries', 'getCategoryQuery.js'));
const addCategoryQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'CategoryQueries', 'addCategoryQuery.js'));
const addBookCategoryQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'BookCategoryQueries', 'addBookCategoryQuery.js'));

const BookDTO = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'BookDTO.js'));
const CategoryDTO = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'CategoryDTO.js'));
const BookCategoryDTO = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'BookCategoryDTO.js'));

const addBookService = async (bookData) => {
  try {
    const title = bookData.title;
    const author = bookData.author;
    const totalPages = bookData.totalPages;
    const categories = bookData.categories;

    // check if category is exist
    const categoryIds = [];

    for (const category of categories) {
      const categoryLowered = category.toLowerCase();
      const categoryUnderscored = categoryLowered.replace(' ', '_');

      let categoryResult = await getCategoryQuery(new CategoryDTO(
          null,
          categoryUnderscored,
      ));

      // if not exist, add new category
      // if exist, get category id
      if (categoryResult.length === 0) {
        categoryResult = await addCategoryQuery(new CategoryDTO(
            null,
            categoryUnderscored,
        ));

        categoryIds.push(categoryResult.id);
        continue;
      } else categoryIds.push(categoryResult[0].id);
    }

    // add new book to database
    const bookResult = await addBookQuery(new BookDTO(
        null,
        title,
        author,
        totalPages,
    ));

    // add new book category to database
    for (const categoryId of categoryIds) {
      await addBookCategoryQuery(new BookCategoryDTO(
          null,
          bookResult.id,
          categoryId,
      ));
    }

    // if book successfully added
    return {
      status: 201,
      message: 'Successfully add new book.',
      data: {
        bookResult,
        categoryIds,
      },
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = addBookService;
