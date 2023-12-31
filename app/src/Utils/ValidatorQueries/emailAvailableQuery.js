const path = require('path');

const User = require(path.resolve('app', 'src', 'Models', 'User.js'));

const emailAvailableQuery = async (email) => {
  try {
    const result = await User.findAll({
      where: {
        email: email,
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

module.exports = emailAvailableQuery;
