const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const username = req.body.username;

  res
      .json({
        status: 'success',
        message: `Data: ${username} would be posted to the database.`,
      })
      .sendStatus(201);
});

router
    .route('/:username?')
    .get((req, res) => {
      const username = req.params.username ? req.params.username : 'Guest';

      res
          .json({
            status: 'success',
            message: `Welcome to the Coffee Shop API, ${username}!`,
          })
          .sendStatus(200);
    })
    .put((req, res) => {
      const username = req.body.username;

      res
          .json({
            status: 'success',
            message: `Data: ${username} would be updated in the database.`,
          })
          .sendStatus(200);
    })
    .delete((req, res) => {
      const username = req.body.username;

      res
          .json({
            status: 'success',
            message: `Data: ${username} would be deleted from the database.`,
          })
          .sendStatus(200);
    });

module.exports = router;
