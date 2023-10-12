const express = require('express')
const app = express()
const taskRoutes = require('./routes/taskRoutes')

app.use(express.static('public'))
app.use(express.json())

app.listen(4000, async() => {
    console.log('El servidor se esta ejecutando')
})

//routes
app.get('/', (request, response) => {
  response.send('TASK APP')
})

app.use(taskRoutes)