require('dotenv').config();
const path = require('path');
const jwt = require('jsonwebtoken');

const checkRefreshTokenQuery = require(path.resolve('app', 'src', 'Repositories', 'Queries', 'UserQueries', 'checkRefreshTokenQuery.js'));

const createAccessToken = require(path.resolve('app', 'src', 'Utils', 'Auth', 'createAccessToken.js'));

const refreshTokenService = async (data) => {
  const userRefreshToken = data.refreshToken;
  const username = data.username;
  const email = data.email;
  const role = data.role;

  const payload = {
    username,
    email,
    role,
  };

  try {
    // check if refresh token is in database
    await checkRefreshTokenQuery(payload, userRefreshToken);

    // check if refresh token is valid
    jwt.verify(userRefreshToken, process.env.REFRESH_TOKEN_SECRET);

    // create new token
    const newToken = createAccessToken(payload);

    return {
      status: 200,
      message: 'Token refreshed',
      data: {
        token: newToken,
      },
    };
  } catch (error) {
    return {
      status: 401,
      message: 'Invalid refresh token',
    };
  }
};

module.exports = refreshTokenService;
