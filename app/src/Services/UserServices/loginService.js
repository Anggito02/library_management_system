const path = require('path');

const userDto = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'UserDto.js'));
const refreshTokenDto = require(path.resolve('app', 'src', 'Repositories', 'DTO', 'RefreshTokenDto.js'));

const addRefreshTokenQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'UserQueries', 'addRefreshTokenQuery.js'));
const checkUserQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'UserQueries', 'checkUserQuery.js'));

const createAccessToken = require(path.resolve('app', 'src', 'Utils', 'Auth', 'createAccessToken.js'));
const createRefreshToken = require(path.resolve('app', 'src', 'Utils', 'Auth', 'createRefreshToken.js'));

const loginService = async (data) => {
  try {
    const email = data.email;
    const password = data.password;
    const rememberMe = data.rememberMe;

    // check if user exists in database
    const result = await checkUserQuery(new userDto(
        null,
        null,
        password,
        email,
        null,
        null,
        null,
        null,
    ));

    if (result === false) {
      return {
        status: 401,
        message: 'Invalid credentials',
      };
    }

    // create access token
    const accessToken = createAccessToken({
      username: result.username,
      email: result.email,
      role: result.role,
    });

    // create refresh token
    const refreshToken = createRefreshToken({
      username: result.username,
      email: result.email,
      role: result.role,
    });

    // add refresh token to database
    await addRefreshTokenQuery(rememberMe, new refreshTokenDto(
        result.username,
        result.email,
        result.role,
        refreshToken,
    ));

    return {
      status: 200,
      message: 'Login successful',
      data: {
        accessToken,
        refreshToken,
      },
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = loginService;
