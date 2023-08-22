const path = require('path');
const express = require('express');
const router = express.Router();

const validateAccessToken = require(path.resolve('app', 'src', 'Middlewares', 'validateAccessToken.js'));

const userRouter = require(path.resolve('app', 'routes', 'UserRoutes.js'));
const bookRouter = require(path.resolve('app', 'routes', 'BookRoutes.js'));

router.use('/user', userRouter);
router.use('/book', validateAccessToken, bookRouter);

module.exports = router;
