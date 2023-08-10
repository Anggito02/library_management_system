const path = require('path');

const User = require(path.resolve('app', 'src', 'Models', 'User.js'));

const usernameAvailableQuery = async (username) => {
  try {
    const result = await User.findAll({
      where: {
        username: username,
      },
    });

    if (result) {
      return false;
    }
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = usernameAvailableQuery;
