const {promises : fs} = require('fs')

class Products{
    
    constructor(ruta){
        this.ruta = ruta
    }
    async getProducts(){
        try {
            let datos = await fs.readFile(this.ruta, 'utf8')
            return datos
        } catch (error) {
            console.log('no hay datos');
            return []
        }
    }
    async getRandom(){
        try {
            let datos = await this.getProducts()
            let jsonData = JSON.parse(datos)
            let numRandom = Math.floor(Math.random() * jsonData.length)

            return jsonData[numRandom]
        } catch (error) {
            return []
        }
    }
}

module.exports = Products