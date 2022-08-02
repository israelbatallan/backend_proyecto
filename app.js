const {Contenedor} = require('./contenedor')

(async () => {
    const products = new Contenedor('./products.json')

    let result = ``

    result = await products.save({
        title: 'Producto 1', 
        price: 15.5,
        thumbnail: 'https://via.placeholder.com/150',
    })
    console.log(result)
    
    result = await products.save({
        title: 'Producto 2',
        price: 20.5,
        thumbnail: 'https://via.placeholder.com/150',
    })
    console.log(result)

    result = await products.save({
        title: 'Producto 3',
        price: 25.5,
        thumbnail: 'https://via.placeholder.com/150',
    })
    console.log(result)

    result = await products.getById(2)
    console.log("Producto 2: ", result)

    result = await products.getAll()
    console.log(result)

    result = await products.deleteById(2)
    console.log(result)

    result = await products.deleteAll()
    console.log(result)

    // result = await products.getAll()
})()