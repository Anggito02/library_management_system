const path = require('path');

const addUserService = require(path.resolve('app', 'src', 'Services', 'addUserService.js'));

const addUser = async (req, res) => {
  const data = req.body;

  const result = await addUserService(data);

  res
      .status(result.status)
      .json(result);
};

module.exports = {
  addUser,
};
