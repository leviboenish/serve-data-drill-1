const express = require('express');
const app = express();
const cors = require('cors');
const port = 9000;
const cohortData = require('./cohorts')

app.use(cors())

app.get('/', (req,res,next) => {
  res.json({cohortData})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
