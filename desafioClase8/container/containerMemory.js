class containerMemory {
    miId = 0
    constructor() {
        this.products = []
    }
    getAll() {
        return this.products
    }
    getOne(id) {
        let obj = this.products.filter(p => p.id == Number(id))
        return obj
    }
    addOne(obj) {
        obj.id = this.miId++
        this.products.push(obj)
        // this.products= [...this.products, obj]
    }
    updateOne(id, obj) {
        this.products.forEach(p => {
            if (p.id == Number(id)) {
                p.obj
            }
        })
        return this.products
    }
    deleteOne(id) {
        let obj = this.products.filter(p => p.id != Number(id))
        this.products = obj
        return obj
    }
}

module.exports = containerMemory