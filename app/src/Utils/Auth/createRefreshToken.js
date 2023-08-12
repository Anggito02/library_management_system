require('dotenv').config();
const jwt = require('jsonwebtoken');

const createRefreshToken = (payload) => {
  const token = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET,
  );

  return token;
};

module.exports = createRefreshToken;
