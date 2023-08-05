const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const {sequelize} = require('./config/sequelize.config.js');

const userRouter = require('./app/routes/UserRoutes.js');
const bookRouter = require('./app/routes/BookRoutes.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/api/user', userRouter);
app.use('/api/book', bookRouter);

sequelize.authenticate().then(() => {
  console.log('Connection to the database has been established successfully.');
}).catch((error) => {
  console.log('Unable to connect to the database: ', error);
});
