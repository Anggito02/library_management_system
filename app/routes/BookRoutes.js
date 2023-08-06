const express = require('express');
const router = express.Router();
const path = require('path');

const {
  getAllBooks,
  getBook,
  addBook,
  deleteBook,
} = require(path.resolve('app', 'src', 'Controller', 'BookController.js'));

router
    .route('/')
    .get(getAllBooks)
    .post(addBook);

router
    .route('/:id')
    .get(getBook)
    .delete(deleteBook);

module.exports = router;
