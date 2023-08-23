const path = require('path');
const bcrypt = require('bcrypt');

const User = require(path.resolve('app', 'src', 'Models', 'User.js'));

const checkUserQuery = async (userDto) => {
  try {
    const result = await User.findOne({
      where: {
        email: userDto.email,
      },
    });

    if (bcrypt.compareSync(userDto.password, result.password)) return result;

    return false;
  } catch (error) {
    throw error;
  }
};

module.exports = checkUserQuery;
