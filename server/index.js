const express = require('express')
const bodyParser = require('body-parser')
const utils = require('./utils.js')

const app = express()

const PORT_NUMBER = 3000

// Middleware


app.use(bodyParser.json())
app.use(utils.accessControlAllowOrigin)
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('Something went wrong!')
})
app.use(utils.logger)

// Endpoints

app.get('/', (req, res) => {
  res.send('Hey!')
})

app.get('*', (req, res) => {
  res.status(200).send('Not found! :((')
})

// ::::: TODO REMOVE ::::

app.post('/images', (req, res) =>{
  const image = { id: '5678', url: 'http://via.placeholder.com/350x150' }
  res.status(201).json(image)
})


// Start Server

app.listen(PORT_NUMBER, () => {
  console.log(`Server running on Port: ${PORT_NUMBER}`)
})