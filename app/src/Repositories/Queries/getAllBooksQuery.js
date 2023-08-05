const path = require('path');
const Book = require(path.resolve('app', 'src', 'Models', 'Book.js'));

const BookDTO = require('../DTO/BookDTO.js');

const getAllBooksQuery = async () => {
  try {
    const result = await Book.findAll({
      attributes: [
        'id',
        'title',
        'author',
        'total_pages',
      ],
    });

    const books = result.map((book) => {
      return new BookDTO(
          book.id,
          book.title,
          book.author,
          book.total_pages,
      );
    });

    return books;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllBooksQuery;
