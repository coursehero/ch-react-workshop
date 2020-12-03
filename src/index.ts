const express = require('express')
var cors = require('cors')
var morgan = require('morgan')

const app = express()
const port = 5005

app.use(morgan('combined'))
app.use(cors())

var path = require('path')
var templates = path.join(__dirname, 'templates')

const data = require('./static/docs.json')

app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('/', function (req, res) {
  res.sendFile(path.join(templates, 'index.html'))
})

app.get('/search', function (req, res) {
  const filtered = Object.keys(data)
    .filter((key) => key.toUpperCase().includes(req.query.term.toUpperCase()))
    .map((key) => {
      return {
        value: key,
        label: data[key]['name'],
      }
    })
  res.send(filtered)
})

app.get('/docInfo', function (req, res) {
  res.send(data[req.query.docName])
})

app.listen(port, () => {
  console.log(`chapp listening at http://localhost:${port}`)
})
