const express = require('express')

const app = express()

app.use(express.json())
// GET, POST, PUT, DELETE

// TIPOS DE PARAMENTROS
// QUERY PARAMS: request.query
// ROUTE PARAMS: request.params
// BODY

app.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({message:'Hello World'})
})

app.listen(3333)