import fs from 'fs';

export default class FileSystemContainer {
  constructor(route) {
    this.route = route;
  }
  writeFile(input) {
    fs.promises.writeFile(this.route, JSON.stringify(input));
  }
  async getAll() {
    try {
      const data = await fs.promises.readFile(this.route, 'utf-8');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(error);
    }
  }
  async save(name, description, image, price) {
    try {
      let data = await this.getAll();
      data.push({
        id: !data.length ? 1 : parseInt(data[data.length - 1].id) + 1,
        nombre: name || `One Piece`,
        descripcion: description || `Manga One Piece #3`,
        foto: image || `https://www.ivrea.com.ar/onepiece/onepiece03.jpg`,
        precio: price || 650,
        stock: 30,
      });
      this.writeFile(data);
    } catch (err) {
      console.error(err);
    }
  }

  async getById(i) {
    try {
      const data = await this.getAll();
      return data.find((x) => x.id == i);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteById(id) {
    try {
      const data = await this.getAll();
      const index = data.findIndex((obj) => obj.id == id);
      if (index > -1) {
        const newData = data.slice(0, index).concat(data.slice(index + 1));
        this.writeFile(newData);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  }

  async updateProduct(id, name, description, image, price, stock) {
    try {
      const data = await this.getAll();
      const index = data.findIndex((obj) => obj.id == id);
      if (index > -1) {
        data[index] = {
          id: id,
          nombre: name || data[index].nombre,
          descripcion: description || data[index].descripcion,
          foto: image || data[index].foto,
          precio: price || data[index].precio,
          stock: stock || data[index].stock,
        };
        this.writeFile(data);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
    }
  }

  deleteAll() {
    try {
      fs.promises.writeFile(this.route, JSON.stringify([]));
    } catch (err) {
      console.error(err);
    }
    console.log('Todos los elementos han sido eliminados');
  }

  async addNewCart() {
    try {
      const data = await this.getAll();
      const id = !data.length ? 1 : parseInt(data[data.length - 1].id) + 1;
      data.push({
        id: id,
        productos: [],
      });
      this.writeFile(data);
      return id;
    } catch (err) {
      console.error(err);
    }
  }

  async getCartProducts(id) {
    try {
      const cart = await this.getById(id);
      return cart ? cart.productos : undefined;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteProductFromCart(id, idProduct) {
    try {
      const carts = await this.getAll();
      const cart = await this.getById(id);

      if (!cart) return `No encontramos el carrito que buscas...`;
      const productIndex = cart.productos.findIndex((prod) => prod.id == idProduct);
      const cartIndex = carts.findIndex((cart) => cart.id == id);
      if (productIndex > -1) {
        carts[cartIndex].productos = cart.productos
          .slice(0, productIndex)
          .concat(cart.productos.slice(productIndex + 1));
        this.writeFile(carts);
        return true;
      } else if (productIndex == -1) {
        return `No encontramos ese producto en tu carrito`;
      } else {
        throw new Error('Algo salio mal!')
      }
    } catch (error) {
      console.error(error);
    }
  }
  async emptyCart(id) {
    try {
      const carts = await this.getAll();
      const cart = await this.getById(id);
      if (!cart) return `No encontramos el carrito`;
      const index = carts.findIndex((cart) => cart.id == id);
      carts[index].productos = [];
      this.writeFile(carts);
      return true;
    } catch (error) {
      console.error(error);
    }
  }
}