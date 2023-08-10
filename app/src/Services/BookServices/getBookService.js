const path = require('path');
const getBookQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'getBookQuery.js'));

const getBookService = async (id) => {
  try {
    // get book with {id} from database
    const result = await getBookQuery(id);

    // if no book with {id} found
    if (result === null) {
      return {
        status: 404,
        message: 'Book not found.',
      };
    }

    // if book with {id} found
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
