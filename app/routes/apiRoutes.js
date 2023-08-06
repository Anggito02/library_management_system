const path = require('path');
const express = require('express');
const router = express.Router();

const userRouter = require(path.resolve('app', 'routes', 'UserRoutes.js'));
const bookRouter = require(path.resolve('app', 'routes', 'BookRoutes.js'));

router.use('/user', userRouter);
router.use('/book', bookRouter);

module.exports = router;
