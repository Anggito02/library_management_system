const path = require('path');
const Book = require(path.resolve('app', 'src', 'Models', 'Book.js'));

const deleteBookQuery = async (bookDto) => {
  try {
    const result = await Book.destroy({
      where: {
        id: bookDto.id,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = deleteBookQuery;
