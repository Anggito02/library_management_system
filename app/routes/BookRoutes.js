const express = require('express');
const router = express.Router();
const path = require('path');

const isLoggedIn = require(path.resolve('app', 'src', 'Middlewares', 'isLoggedIn.js'));
const isAdmin = require(path.resolve('app', 'src', 'Middlewares', 'isAdmin.js'));

const {
  getAllBooks,
  getBook,
  addBook,
  deleteBook,
} = require(path.resolve('app', 'src', 'Controller', 'BookController.js'));

router
    .route('/')
    .get(isLoggedIn, getAllBooks)
    .post(isLoggedIn, isAdmin, addBook);

router
    .route('/:id')
    .get(isLoggedIn, getBook)
    .delete(isLoggedIn, isAdmin, deleteBook);

module.exports = router;
