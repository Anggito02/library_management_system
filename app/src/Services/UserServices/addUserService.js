const path = require('path');
const bcrypt = require('bcrypt');

const UserDTO = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'UserDto.js'));

const addUserQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'UserQueries', 'addUserQuery.js'));

const {
  usernameValidator,
  passwordValidator,
  emailValidator,
} = require(path.resolve('app', 'src', 'Utils', 'Validator', 'validator.js'));

const addUserService = async (data) => {
  try {
    const username = data.username;
    const password = data.password;
    const email = data.email;

    // validate username, password, and email
    const usernameValidation = await usernameValidator(username);
    const emailValidation = await emailValidator(email);
    const passwordValidation = passwordValidator(password);

    if (usernameValidation.status !== true) {
      return {
        status: 400,
        message: usernameValidation.message,
      };
    }

    if (passwordValidation.status !== true) {
      return {
        status: 400,
        message: passwordValidation.message,
      };
    }

    if (emailValidation.status !== true) {
      return {
        status: 400,
        message: emailValidation.message,
      };
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // add new user to database
    const result = await addUserQuery(new UserDTO(
        null,
        username,
        hashedPassword,
        email,
        null,
        null,
        null,
        null,
    ));

    // if user successfully added
    return {
      status: 201,
      message: 'Successfully add new user.',
      data: result,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = addUserService;
