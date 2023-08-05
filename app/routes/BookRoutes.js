const express = require('express');
const router = express.Router();

const {
  getAllBooks,
  getBook,
} = require('../src/Controller/BookController.js');

router
    .route('/')
    .get(getAllBooks);

router
    .route('/:id')
    .get(getBook);

module.exports = router;
