const path = require('path');

const User = require(path.resolve('app', 'src', 'Models', 'User.js'));

const usernameAvailableQuery = async (username) => {
  try {
    const result = await User.findAll({
      where: {
        username: username,
      },
    });

    if (result.length === 0) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

module.exports = usernameAvailableQuery;
