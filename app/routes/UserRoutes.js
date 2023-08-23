const express = require('express');
const router = express.Router();
const path = require('path');

const {
  addUser,
  refreshToken,
  login,
} = require(path.resolve('app', 'src', 'Controller', 'UserController.js'));

router.post('/refresh-token', refreshToken);

router.post('/register', addUser);
router.post('/login', login);

module.exports = router;
