const passwordValidator = (password) => {
  if (password.length < 8) {
    return {
      status: false,
      message: 'Password must be at least 8 characters long.',
    };
  }

  if (!password.match(/[A-Z]+/)) {
    return {
      status: false,
      message: 'Password must contain at least 1 uppercase letter.',
    };
  }

  if (!password.match(/[0-9]+/)) {
    return {
      status: false,
      message: 'Password must contain at least 1 number.',
    };
  }

  if (!password.match(/[^a-zA-Z0-9]+/)) {
    return {
      status: false,
      message: 'Password must contain at least 1 special character.',
    };
  }

  return {
    status: true,
    message: 'Password is valid.',
  };
};

module.exports = passwordValidator;
