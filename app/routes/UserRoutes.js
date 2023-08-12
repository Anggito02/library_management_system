const express = require('express');
const router = express.Router();
const path = require('path');

const {
  addUser,
  refreshToken,
} = require(path.resolve('app', 'src', 'Controller', 'UserController.js'));

router.post('/register', addUser);
router.post('/refresh-token', refreshToken);

module.exports = router;
