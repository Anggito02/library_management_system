const path = require('path');
const deleteBookQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'BookQueries', 'deleteBookQuery.js'));

const BookDTO = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'BookDTO.js'));

const deleteBookService = async (bookId) => {
  try {
    const bookDto = new BookDTO(
        bookId,
        null,
        null,
        null,
    );

    // delete book with {id} from database
    const result = await deleteBookQuery(bookDto);

    // if no book with {id} found
    if (result === 0) {
      return {
        status: 404,
        message: 'Book not found.',
      };
    }

    // if book with {id} found
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
