const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9000;
const cohortData = require('./cohorts')

app.use(cors())

app.get('/', (req, res, next) => {
  res.json({
    cohortData
  })
})

const findById = (params, data) => {
  for (let i = 0; i < data.length; i++) {
    let holderString = (data[i].ID).toString()
    if (params === holderString) {
      return data[i];
    }
  }
  return null
}

app.get('/:id', (req, res, next) => {
  const cohort = findById(req.params.id, cohortData)
  if (!cohort) {

    res.status(404).json({
      error: {
        message: "No ID found!"
      }
    })
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
