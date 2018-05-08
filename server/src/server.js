const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')
const endpoints = require('./endpoints')
const app = express()



app.use(cors())
app.use(bodyParser.json())

endpoints(app)

app.listen(3001, () => {
  console.log('Server started at http://localhost:3001...')
})
