// import mongoose from "mongoose";
// import ProdMongoController from "../../controllers/mongodb/ProdMongoController.js";
const mongoose = require("mongoose");
const ProdMongoController = require("../../controllers/mongodb/ProdMongoController.js");

const schema = new mongoose.Schema({
    timestamp: {type: String, required: true, max:50},
    nombre: {type: String, required: true, max:100},
    descripcion: {type: String, required: true, max:400},
    codigo: {type: Number, required: true},
    foto: {type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
    cantidad: {type: Number, require: false}
});


class MongoDbDaoProducts extends ProdMongoController {
    constructor() {
        super('products', schema);
    }
}

// export default MongoDbDaoProducts;
module.exports = MongoDbDaoProducts;