# Desafio Clase 18

## 1 y 2) Agrego documentos y defino claves en las colecciones.

### Input

```sh
db.products.insertMany([{title: 'pulsera', price: 120, thumbnail: 'none'}, {title: 'collar', price: 580, thumbnail: 'none'}, {title: 'soquete', price: 900, thumbnail: 'none'}, {title: 'boxer', price: 1280, thumbnail: 'none'}, {title: 'chaleco', price: 1700, thumbnail: 'none'}, {title: 'short', price: 2300, thumbnail: 'none'}, {title: 'remera', price: 2860, thumbnail: 'none'}, {title: 'pantalon', price: 3350, thumbnail: 'none'}, {title: 'buzo', price: 4320, thumbnail: 'none'}, {title: 'campera', price: 4990, thumbnail: 'none'}])
```

### Output

```sh
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("632b5ac402c11afbbf6a7978"),
    '1': ObjectId("632b5ac402c11afbbf6a7979"),
    '2': ObjectId("632b5ac402c11afbbf6a797a"),
    '3': ObjectId("632b5ac402c11afbbf6a797b"),
    '4': ObjectId("632b5ac402c11afbbf6a797c"),
    '5': ObjectId("632b5ac402c11afbbf6a797d"),
    '6': ObjectId("632b5ac402c11afbbf6a797e"),
    '7': ObjectId("632b5ac402c11afbbf6a797f"),
    '8': ObjectId("632b5ac402c11afbbf6a7980"),
    '9': ObjectId("632b5ac402c11afbbf6a7981")
  }
}
```

### Input

```sh
db.mensajes.insertMany([{date:'ya', mail:"un@mail.com", message: "hola"},{date:'ya', mail:"un@mail.com", message: "buenas"}, {date:'ya', mail:"un@mail.com", message: "este"},{date:'ya', mail:"un@mail.com", message: "es"},{date:'ya', mail:"un@mail.com", message: "un"},{date:'ya', mail:"otro@mail.com", message: "mensaje"},{date:'ya', mail:"otro@mail.com", message: "para"},{date:'ya', mail:"otro@mail.com", message: "usar"},{date:'ya', mail:"otro@mail.com", message: "de"},{date:'ya', mail:"otro@mail.com", message: "prueba"}])
```

### Output

```sh
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("632b5b0702c11afbbf6a7982"),
    '1': ObjectId("632b5b0702c11afbbf6a7983"),
    '2': ObjectId("632b5b0702c11afbbf6a7984"),
    '3': ObjectId("632b5b0702c11afbbf6a7985"),
    '4': ObjectId("632b5b0702c11afbbf6a7986"),
    '5': ObjectId("632b5b0702c11afbbf6a7987"),
    '6': ObjectId("632b5b0702c11afbbf6a7988"),
    '7': ObjectId("632b5b0702c11afbbf6a7989"),
    '8': ObjectId("632b5b0702c11afbbf6a798a"),
    '9': ObjectId("632b5b0702c11afbbf6a798b")
  }
}
```

## 3) Listo los documentos de cada coleccion.

### Input

```sh
db.products.find()
```

### Output

```sh
[
  {
    _id: ObjectId("632b5ac402c11afbbf6a7978"),
    title: 'pulsera',
    price: 120,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a7979"),
    title: 'collar',
    price: 580,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797a"),
    title: 'soquete',
    price: 900,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797b"),
    title: 'boxer',
    price: 1280,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797c"),
    title: 'chaleco',
    price: 1700,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797d"),
    title: 'short',
    price: 2300,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797e"),
    title: 'remera',
    price: 2860,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797f"),
    title: 'pantalon',
    price: 3350,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a7980"),
    title: 'buzo',
    price: 4320,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a7981"),
    title: 'campera',
    price: 4990,
    thumbnail: 'none'
  }
]
```
### Input

```sh
db.mensajes.find()
```

### Output

```sh
[
  {
    _id: ObjectId("632b5b0702c11afbbf6a7982"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'hola'
  },
  {
    _id: ObjectId("632b5b0702c11afbbf6a7983"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'buenas'
  },
  {
    _id: ObjectId("632b5b0702c11afbbf6a7984"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'este'
  },
  {
    _id: ObjectId("632b5b0702c11afbbf6a7985"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'es'
  },
  {
    _id: ObjectId("632b5b0702c11afbbf6a7986"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'un'
  },
  {
    _id: ObjectId("632b5b0702c11afbbf6a7987"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'mensaje'
  },
  {
    _id: ObjectId("632b5b0702c11afbbf6a7988"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'para'
  },
  {
    _id: ObjectId("632b5b0702c11afbbf6a7989"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'usar'
  },
  {
    _id: ObjectId("632b5b0702c11afbbf6a798a"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'de'
  },
  {
    _id: ObjectId("632b5b0702c11afbbf6a798b"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'prueba'
  }
]
```

## 4) Cantidad de documentos guardados en cada coleccion.

### Input

```sh
db.products.estimatedDocumentCount()
```

### Output

```sh
10
```

### Input

```sh
db.mensajes.estimatedDocumentCount()
```

### Output

```sh
10
```

## 5) CRUD

a) Agregar un producto más en la colección de productos

### Input

```sh
db.products.insertOne({title:"zapatillas", price: 4330, image: "none"})
```

### Output

```sh
{
  acknowledged: true,
  insertedId: ObjectId("632b5cda02c11afbbf6a798c")
}
```

b)i) Listar los productos con precio menor a 1000 pesos.

### Input

```sh
db.products.find({price:{$lt: 1000}})
```

### Output

```sh
[
  {
    _id: ObjectId("632b5ac402c11afbbf6a7978"),
    title: 'pulsera',
    price: 120,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a7979"),
    title: 'collar',
    price: 580,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797a"),
    title: 'soquete',
    price: 900,
    thumbnail: 'none'
  }
]
```

b)ii) Listar los productos con precio entre los 1000 a 3000 pesos.

### Input

```sh
db.products.find({$and:[ {price:{$gt: 1000}}, {price:{$lt: 3000}}]})
```

### Output

```sh
[
  {
    _id: ObjectId("632b5ac402c11afbbf6a797b"),
    title: 'boxer',
    price: 1280,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797c"),
    title: 'chaleco',
    price: 1700,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797d"),
    title: 'short',
    price: 2300,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a797e"),
    title: 'remera',
    price: 2860,
    thumbnail: 'none'
  }
]
```

b)iii) Listar los productos con precio mayor a 3000 pesos.

### Input

```sh
db.products.find({price:{$gt: 3000}})
```

### Output

```sh
[
  {
    _id: ObjectId("632b5ac402c11afbbf6a797f"),
    title: 'pantalon',
    price: 3350,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a7980"),
    title: 'buzo',
    price: 4320,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5ac402c11afbbf6a7981"),
    title: 'campera',
    price: 4990,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("632b5cda02c11afbbf6a798c"),
    title: 'zapatillas',
    price: 4330,
    image: 'none'
  }
]
```

b)iv) Realizar una consulta que traiga sólo el nombre del tercer producto más barato.

### Input

```sh
db.products.find({}, {'title': 1, '_id': 0}).sort({price:1}).skip(2).limit(1)
```

### Output

```sh
[ { title: 'soquete' } ]
```

c) Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.

### Input

```sh
db.products.updateMany({}, { $set: {stock: 100 } })
```

### Output

```sh
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 11,
  modifiedCount: 11,
  upsertedCount: 0
}
```

d) Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.

### Input

```sh
db.products.updateMany({price: {$gt: 4000}}, { $set: {stock: 0 } })
```

### Output

```sh
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
```

e) Borrar los productos con precio menor a 1000 pesos

### Input

```sh
db.products.deleteMany({price:{$lt: 1000}})
```

### Output

```sh
{ acknowledged: true, deletedCount: 3 }
```

## 6) Creo un usuario de solo lectura de la db ecommerce

### Input

```sh
db.createUser({user:'pepe', pwd: 'asd456', roles:[{role: 'read', db:'ecommerce'}]})
```

### Output

```sh
{ ok: 1 }
```

Una vez logueado con el usuario pepe intento realizar una insercion.

### Input

```sh
db.products.insertOne({title:"celular", price: 1230, image: "none"})
```

### Output

```sh
MongoServerError: not authorized on ecommerce to execute command { insert: "products", documents: [ { title: "celular", price: 1230, image: "none", _id: ObjectId('632b6b1e3965c5759ac62fd8') } ], ordered: true, lsid: { id: UUID("ad269570-3bd6-4413-a0c0-1adc6e45391d") }, $db: "ecommerce" }
```