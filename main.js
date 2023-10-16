const express = require('express')
const app = express()
const taskRoutes = require('./routes/taskRoutes')
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))
app.use(express.json())

//routes
app.get('/', (request, response) => {
  response.send('TASK APP')
})

console.log(process.argv[2]);

app.use(taskRoutes)

module.exports = app;