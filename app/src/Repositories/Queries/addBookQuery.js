const path = require('path');

const Book = require(path.resolve('app', 'src', 'Models', 'Book.js'));

const addBookQuery = async (bookDto) => {
  try {
    const result = await Book.create({
      title: bookDto.title,
      author: bookDto.author,
      total_pages: bookDto.totalPages,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = addBookQuery;
