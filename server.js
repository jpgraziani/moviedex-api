const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.use((req, res) => {
  res.send('hello olivia')
})

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

