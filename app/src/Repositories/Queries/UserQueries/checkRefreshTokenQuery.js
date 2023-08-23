const path = require('path');

const RefreshToken = require(path.resolve('app', 'src', 'Models', 'RefreshToken.js'));

const checkRefreshTokenQuery = async (refreshTokenDto) => {
  try {
    const result = await RefreshToken.findAll({
      where: {
        username: refreshTokenDto.username,
        email: refreshTokenDto.email,
        role: refreshTokenDto.role,
        token: refreshTokenDto.refreshToken,
      },
    });

    if (result.length === 0) {
      return false;
    }
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = checkRefreshTokenQuery;
