const path = require('path');
const Book = require(path.resolve('app', 'src', 'Models', 'Book.js'));

const deleteBookQuery = async (bookId) => {
  try {
    const result = await Book.destroy({
      where: {
        id: bookId,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = deleteBookQuery;
