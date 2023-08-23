const path = require('path');

const RefreshToken = require(path.resolve('app', 'src', 'Models', 'RefreshToken.js'));

const addRefreshTokenQuery = async (refreshTokenDto) => {
  try {
    const result = await RefreshToken.create({
      username: refreshTokenDto.username,
      email: refreshTokenDto.email,
      role: refreshTokenDto.role,
      token: refreshTokenDto.refreshToken,
    });

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = addRefreshTokenQuery;
