const path = require('path');

const emailAvailableQuery = require(path.resolve('app', 'src', 'Utils', 'Queries', 'emailAvailableQuery.js'));

const emailValidator = async (email) => {
  if (await emailAvailableQuery(email) === false) {
    return {
      status: false,
      message: 'Email is already taken.',
    };
  }

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
