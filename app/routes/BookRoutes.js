const express = require('express');
const router = express.Router();

const {
  getAllBooks,
  getBook,
  addBook,
  deleteBook,
} = require('../src/Controller/BookController.js');

router
    .route('/')
    .get(getAllBooks)
    .post(addBook);

router
    .route('/:id')
    .get(getBook)
    .delete(deleteBook);

module.exports = router;
