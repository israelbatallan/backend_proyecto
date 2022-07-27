class Usuario {
    constructor(nombre, apellido, libro, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = libro;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(newMascota) {
        this.mascotas.push(newMascota);
    }
    
    countMascotas() {
        return this.mascotas.length;
    }
    
    addBook(nombre, autor) {
        this.libro.push({nombre: nombre, autor: autor});
    }

    getBookNames() {
        return this.libro.map((el) => el.nombre);
    }
}

const usuario1 = new Usuario('Juan', 'Perez', [{nombre: 'Js', autor: 'JP'}], ['Libra']);

console.log (usuario1.getFullName());
usuario1.addMascota('Perro');
console.log (usuario1.countMascotas());
usuario1.addBook('Abc', 'Pedro');
console.log (usuario1.getBookNames());