const path = require('path');

const usernameAvailableQuery = require(path.resolve('app', 'src', 'Utils', 'Queries', 'usernameAvailableQuery.js'));

const usernameValidator = async (username) => {
  if (await usernameAvailableQuery(username) === false) {
    return {
      status: false,
      message: 'Username is already taken.',
    };
  }

  if (username.length < 5) {
    return {
      status: false,
      message: 'Username must be at least 5 characters long.',
    };
  }

  if (username.length > 20) {
    return {
      status: false,
      message: 'Username must be less than 20 characters long.',
    };
  }

  if (!username.match(/^[a-zA-Z0-9]+$/)) {
    return {
      status: false,
      message: 'Username must only contain alphanumeric characters.',
    };
  }

  if (username.match(/^[0-9]+$/)) {
    return {
      status: false,
      message: 'Username must contain at least 1 letter.',
    };
  }

  if (username.match(/^[a-zA-Z]+$/)) {
    return {
      status: false,
      message: 'Username must contain at least 1 number.',
    };
  }

  return {
    status: true,
    message: 'Username is valid.',
  };
};

module.exports = usernameValidator;
