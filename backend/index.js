const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-hjkkk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
app.use(express.json())
// GET, POST, PUT, DELETE

// TIPOS DE PARAMENTROS
// QUERY PARAMS: request.query
// ROUTE PARAMS: request.params
// BODY

// MONGO DB -> Nao relacional

app.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({message:'Hello World'})
})

app.listen(3333)