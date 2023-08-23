const path = require('path');

const addUserService = require(path.resolve('app', 'src', 'Services', 'UserServices', 'addUserService.js'));
const refreshTokenService = require(path.resolve('app', 'src', 'Services', 'UserServices', 'refreshTokenService.js'));
const loginService = require(path.resolve('app', 'src', 'Services', 'UserServices', 'loginService.js'));

const refreshToken = async (req, res) => {
  const data = req.body;

  const result = await refreshTokenService(data);

  res
      .status(result.status)
      .json(result);
};

const addUser = async (req, res) => {
  const data = req.body;

  const result = await addUserService(data);

  res
      .status(result.status)
      .json(result);
};

const login = async (req, res) => {
  const data = req.body;

  const result = await loginService(data);

  res
      .status(result.status)
      .json(result);
};

module.exports = {
  addUser,
  refreshToken,
  login,
};
