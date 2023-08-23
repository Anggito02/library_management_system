const path = require('path');

const RefreshToken = require(path.resolve('app', 'src', 'Models', 'RefreshToken.js'));

const addRefreshTokenQuery = async (rememberMe, refreshTokenDto) => {
  try {
    let result;
    if (rememberMe === false) {
      result = await RefreshToken.create({
        username: refreshTokenDto.username,
        email: refreshTokenDto.email,
        role: refreshTokenDto.role,
        token: refreshTokenDto.refreshToken,
        expires_at: new Date(Date.now() + 60 * 60 * 1000),
      });
    } else {
      result = await RefreshToken.create({
        username: refreshTokenDto.username,
        email: refreshTokenDto.email,
        role: refreshTokenDto.role,
        token: refreshTokenDto.refreshToken,
        expires_at: null,
      });
    }

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = addRefreshTokenQuery;
