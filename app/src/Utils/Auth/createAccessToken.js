require('dotenv').config();
const jwt = require('jsonwebtoken');

const createAccessToken = (payload) => {
  const token = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: '15s'},
  );

  return token;
};

module.exports = createAccessToken;
