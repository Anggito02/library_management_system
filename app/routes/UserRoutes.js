const express = require('express');
const router = express.Router();
const path = require('path');

const {
  addUser,
} = require(path.resolve('app', 'src', 'Controller', 'UserController.js'));

router.post('/register', addUser);

module.exports = router;
