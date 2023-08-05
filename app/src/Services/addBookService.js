const path = require('path');

const addBookQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'addBookQuery.js'));

const BookDTO = require('../Repositories/DTO/BookDTO');

const addBookService = async (bookData) => {
  try {
    title = bookData.title;
    author = bookData.author;
    totalPages = bookData.totalPages;

    const result = addBookQuery(new BookDTO(
        null,
        title,
        author,
        totalPages,
    ));

    return {
      status: 201,
      message: 'Successfully add new book.',
      data: result,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
      data: null,
    };
  }
};

module.exports = addBookService;
