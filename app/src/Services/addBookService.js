const path = require('path');

const addBookQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'addBookQuery.js'));

const BookDTO = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'BookDTO.js'));

const addBookService = async (bookData) => {
  try {
    title = bookData.title;
    author = bookData.author;
    totalPages = bookData.totalPages;

    const result = await addBookQuery(new BookDTO(
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
    };
  }
};

module.exports = addBookService;
