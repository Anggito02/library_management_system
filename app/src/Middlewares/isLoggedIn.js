require('dotenv');

const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader.split(' ')[1];

  if (!accessToken) {
    return res
        .status(401)
        .json({
          status: 401,
          message: 'Access token not found',
        });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res
        .status(401)
        .json({
          status: 401,
          message: error.message,
        });
  }
};

module.exports = isLoggedIn;
