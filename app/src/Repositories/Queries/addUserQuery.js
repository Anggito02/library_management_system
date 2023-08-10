const path = require('path');

const User = require(path.resolve('app', 'src', 'Models', 'User.js'));

const addUserQuery = async (userDto) => {
  try {
    const result = await User.create({
      username: userDto.username,
      password: userDto.password,
      email: userDto.email,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = addUserQuery;
