const path = require('path');
const Book = require(path.resolve('app', 'src', 'Models', 'Book.js'));

const BookDTO = require('../DTO/BookDTO.js');

const getBookQuery = async (id) => {
  try {
    const result = await Book.findByPk(id);

    if (result === null) return null;

    const book = new BookDTO(
        result.id,
        result.title,
        result.author,
        result.totalPages,
    );

    return book;
  } catch (error) {
    throw error;
  }
};

module.exports = getBookQuery;
