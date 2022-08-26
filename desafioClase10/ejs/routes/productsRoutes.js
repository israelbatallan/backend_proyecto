const express = require('express')
const router = express.Router()

let id = 3

let listProducts = [
    {id:1 ,title:"One Piece", price:"650", img:"https://www.ivrea.com.ar/onepiece/onepiece01.jpg"},
    {id:2 ,title:"My Hero Academia", price:"650", img:"https://www.ivrea.com.ar/myheroacademia/myheroacademia01.jpg"},
    {id:3 ,title:"Ajin", price:"750", img:"https://www.ivrea.com.ar/ajin/ajin01.jpg"}
]

router.get('/showProducts', (req, res) => {
    res.render('products', {products:listProducts})
})
router.get('/addProduct', (req, res) => {
    res.render('addProduct')
})
router.get('/details/:id', (req, res) => {
    let id = req.params.id
    let myProduct = listProducts.filter(p => p.id == id)
    if (myProduct.length == 0) {
        return res.send(`No existe ese producto`)
    }
    res.send(myProduct)
})
router.post('/', (req, res) => {
    let data = req.body
    data.id = id++
    listProducts = [...listProducts, data]
    
    // Almacenar datos
    res.redirect('/products/addProduct')
})

module.exports = router