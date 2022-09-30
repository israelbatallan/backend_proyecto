import config from '../../../config.js'
import mongoose from 'mongoose'

let carritosDao

switch (config.env) {
    case 'json':
        const { default: FileSystemCartsDAO } = await import('./fileSystemCartsDAO.js')
        carritosDao = new FileSystemCartsDAO(config.dbPath)
        break
    case 'firebase':
        const { default: FirestoreCartsDAO } = await import('./firestoreCartsDAO.js')
        carritosDao = new FirestoreCartsDAO('carritos', config.firestore)
        break
    case 'mongodb':
        const { default: MongodbCartsDAO } = await import('./mongodbCartsDAO.js')
        carritosDao = new MongodbCartsDAO(
            'carritos',
            new mongoose.Schema({
              id: Number,
              productos: Array,
            }))
        break
}

export { carritosDao }