'use strict'

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const history = require('connect-history-api-fallback')

const app = express()

app.use(history())
app.use('/', serveStatic(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

// eslint-disable-next-line
console.log('Server started on port ' + port)
