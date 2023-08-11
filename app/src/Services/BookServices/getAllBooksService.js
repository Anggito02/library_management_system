const path = require('path');
const getAllBooksQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'BookQueries', 'getAllBooksQuery.js'));

const getAllBooksService = async () => {
  try {
    // get all books from database
    const result = await getAllBooksQuery();

    // if books retrieved
    return {
      status: 200,
      message: 'Successfully retrieved all books.',
      data: result,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = getAllBooksService;
