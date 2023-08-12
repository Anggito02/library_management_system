const path = require('path');
const bcrypt = require('bcrypt');

const UserDTO = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'UserDTO.js'));
const RefreshTokenDTO = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'RefreshTokenDTO.js'));

const addUserQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'UserQueries', 'addUserQuery.js'));
const addRefreshTokenQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'UserQueries', 'addRefreshTokenQuery.js'));

const createAccessToken = require(path.resolve('app', 'src', 'Utils', 'Auth', 'createAccessToken.js'));
const createRefreshToken = require(path.resolve('app', 'src', 'Utils', 'Auth', 'createRefreshToken.js'));

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

    // get token
    const accessToken = createAccessToken({
      username: result.username,
      email: result.email,
      role: result.role,
    });

    const refreshToken = createRefreshToken({
      username: result.username,
      email: result.email,
      role: result.role,
    });

    // save refresh token to database
    await addRefreshTokenQuery(new RefreshTokenDTO(
        result.username,
        result.email,
        result.role,
        refreshToken,
    ));

    const token = {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };

    // if user successfully added
    return {
      status: 201,
      message: 'Successfully add new user.',
      data: result,
      token: token,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = addUserService;
