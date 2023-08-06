const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');

const {sequelize} = require(path.resolve('config', 'sequelize.config.js'));

const apiRouter = require(path.resolve('app', 'routes', 'apiRoutes.js'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/api', apiRouter);

app.use((req, res, next) => {
  res.status(403).json({
    status: 'fail',
    message: `Method ${req.method} is not allowed for the route ${req.originalUrl}`,
  });
});

sequelize.authenticate().then(() => {
  console.log('Connection to the database has been established successfully.');
}).catch((error) => {
  console.log('Unable to connect to the database: ', error);
});
