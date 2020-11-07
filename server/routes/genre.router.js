const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log('/api/genre GET ');

 let queryText = `SELECT * FROM "genres"`

  pool.query(queryText).then( (response) => {
    res.send(response.rows)
  }).catch( (error) => {
    console.log(error);
    res.sendStatus(500)
  })
});

module.exports = router;