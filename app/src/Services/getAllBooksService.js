const path = require('path');
const getAllBooksQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'getAllBooksQuery.js'));

const getAllBooksService = async () => {
  try {
    const result = await getAllBooksQuery();

    return {
      status: 200,
      message: 'Successfully retrieved all books.',
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

module.exports = getAllBooksService;
