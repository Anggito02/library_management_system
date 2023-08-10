const path = require('path');

const usernameValidator = require(path.resolve('app', 'src', 'Utils', 'Validator', 'username.js'));
const passwordValidator = require(path.resolve('app', 'src', 'Utils', 'Validator', 'password.js'));
const emailValidator = require(path.resolve('app', 'src', 'Utils', 'Validator', 'email.js'));

module.exports = {
  usernameValidator,
  passwordValidator,
  emailValidator,
};
