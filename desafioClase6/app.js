const express = require('express')
const app = express()
const Container = require('./container/container')
let products = new Container('./products.txt')

// <-- End point products -->
app.get('/productos', (req, res) => {
    products.getProducts()
    .then((data) => {
        res.send(data)
    })
})

// <-- End point prodRandom -->
app.get('/prodRandom', (req, res) => {
    products.getRandom()
    .then((data) => {
        res.send(data)
    })
})

const PORT=8080

const server = app.listen(PORT, () => {
    console.log(`Se esta escuchando por el puerto ${PORT}`)
})

server.on('error', err => console.log(`Erro en el servidor ${err}`))