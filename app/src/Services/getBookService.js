const path = require('path');
const getBookQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'getBookQuery.js'));

const getBookService = async (id) => {
  try {
    const result = await getBookQuery(id);

    if (result === null) {
      return {
        status: 404,
        message: 'Book not found.',
      };
    }

    return {
      status: 200,
      message: 'Successfully retrieved book.',
      data: result,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = getBookService;
