const path = require('path');

const emailAvailableQuery = require(path.resolve('app', 'src', 'Utils', 'Queries', 'emailAvailableQuery.js'));

const emailValidator = async (email) => {
  // check if email is available
  if (await emailAvailableQuery(email) === false) {
    return {
      status: false,
      message: 'Email is already taken.',
    };
  }

  // check if email is valid
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return {
      status: false,
      message: 'Email must be a valid email address.',
    };
  }

  return {
    status: true,
    message: 'Email is valid.',
  };
};

module.exports = emailValidator;
