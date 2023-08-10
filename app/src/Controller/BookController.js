const path = require('path');

const getAllBooksService = require(path.resolve('app', 'src', 'Services', 'BookServices', 'getAllBooksService.js'));
const getBookService = require(path.resolve('app', 'src', 'Services', 'BookServices', 'getBookService.js'));
const addBookService = require(path.resolve('app', 'src', 'Services', 'BookServices', 'addBookService.js'));
const deleteBookService = require(path.resolve('app', 'src', 'Services', 'BookServices', 'deleteBookService.js'));

const getAllBooks = async (req, res) => {
  const result = await getAllBooksService();

  res
      .status(result.status)
      .json(result);
};

const getBook = async (req, res) => {
  const id = req.params.id;

  const result = await getBookService(id);

  res
      .status(result.status)
      .json(result);
};

const addBook = async (req, res) => {
  const data = req.body;

  const result = await addBookService(data);

  res
      .status(result.status)
      .json(result);
};

const deleteBook = async (req, res) => {
  const id = req.params.id;

  const result = await deleteBookService(id);

  res
      .status(result.status)
      .json(result);
};

module.exports = {
  getAllBooks,
  getBook,
  addBook,
  deleteBook,
};
