require('dotenv');

const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader.split(' ')[1];

  try {
    const payload = jwt.decode(accessToken);

    if (payload.role === 'user') {
      return res
          .status(403)
          .json({
            status: 403,
            message: 'Forbidden',
          });
    }

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

module.exports = isAdmin;
