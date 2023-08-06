const path = require('path');
const deleteBookQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'deleteBookQuery.js'));

const deleteBookService = async (bookId) => {
  try {
    const result = await deleteBookQuery(bookId);

    if (result === 0) {
      return {
        status: 404,
        message: 'Book not found.',
      };
    }

    return {
      status: 200,
      message: 'Successfully deleted book.',
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = deleteBookService;
