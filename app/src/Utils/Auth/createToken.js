require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (payload) => {
  const token = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: '15s'},
  );

  return token;
};

module.exports = createToken;
