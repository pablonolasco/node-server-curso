require('./config/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded procesar form
//cuando sea un use es un middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.status(200).json('getUsuario')
})

app.post('/usuario', function(req, res) {
    let body = req.body; //obtiene el cuerpo que recibe cuando lo llaman
    if (body.nombre === undefined || body.nombre === NaN) {
        res.status(400).json({
            status: false,
            message: 'El nombre es necesario'
        });
    }
    res.status(200).json({
        person: body
    })
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.status(200).json({
        id
    })
})

app.delete('/usuario', function(req, res) {
    res.json('deleteUsuario')
})


app.listen(process.env.PORT, () => {
    console.log('escuchando puerto 3000');
})