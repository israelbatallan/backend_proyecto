import config from '../../../config.js'
import mongoose from 'mongoose'

let productosDao;

switch (config.env) {
  case 'json':
    const { default: FileSystemProductsDAO } = await import('./fileSystemProductsDAO.js')
    productosDao = new FileSystemProductsDAO(config.dbPath)
    break
  case 'firebase':
    const { default: FirestoreProductsDAO } = await import('./firestoreProductsDAO.js')
    productosDao = new FirestoreProductsDAO('productos', config.firestore)
    break
  case 'mongodb':
    const { default: MongodbProductsDAO } = await import('./mongodbProductsDAO.js')
    productosDao = new MongodbProductsDAO('productos', {
      id: Number,
      nombre: String,
      descripcion: String,
      foto: String,
      precio: Number,
      stock: Number,
    })
    break
}

export { productosDao }