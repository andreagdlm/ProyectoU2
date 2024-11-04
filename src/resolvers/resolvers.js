// resolvers.js

const products = [];  // PRODUCTOS
const users = [];     // USUARIOS

const resolvers = {
  Query: {
    // PRODUCTOS
    getProduct: (_, { id }) => products.find(product => product.id === id),
    listProducts: () => products,

    // USUARIOS
    listUsers: () => users,
  },
  Mutation: {
    // PRODUCTOS
    createProduct: (_, { name, description, price, category, brand, qty, img }) => {
      const newProduct = {
        id: String(products.length + 1), // ID UNICO
        name,
        description,
        price,
        category,
        brand,
        qty,
        createdAt: new Date(),
        img,
      };
      products.push(newProduct);
      return newProduct;
    },
    updateProduct: (_, { id, name, description, price, category, brand, qty, img }) => {
      const productIndex = products.findIndex(product => product.id === id);
      if (productIndex === -1) return null;

      const updatedProduct = {
        ...products[productIndex],
        name: name !== undefined ? name : products[productIndex].name,
        description: description !== undefined ? description : products[productIndex].description,
        price: price !== undefined ? price : products[productIndex].price,
        category: category !== undefined ? category : products[productIndex].category,
        brand: brand !== undefined ? brand : products[productIndex].brand,
        qty: qty !== undefined ? qty : products[productIndex].qty,
        img: img !== undefined ? img : products[productIndex].img,
      };

      products[productIndex] = updatedProduct;
      return updatedProduct;
    },
    deleteProduct: (_, { id }) => {
      const productIndex = products.findIndex(product => product.id === id);
      if (productIndex === -1) return false;

      products.splice(productIndex, 1);
      return true;
    },

    // USUARIOS
    createUser: (_, { nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodopagoPreferido }) => {
      const newUser = {
        id: String(users.length + 1), // ID UNICO
        nombreCompleto,
        email,
        password,
        direccion,
        telefono,
        fechaRegistro: new Date().toISOString(),
        tipoUsuario,
        metodopagoPreferido,
      };
      users.push(newUser);
      return newUser;
    },
    updateUser: (_, { id, nombreCompleto, email, password, direccion, telefono, tipoUsuario, metodopagoPreferido }) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) return null;

      const updatedUser = {
        ...users[userIndex],
        nombreCompleto: nombreCompleto !== undefined ? nombreCompleto : users[userIndex].nombreCompleto,
        email: email !== undefined ? email : users[userIndex].email,
        password: password !== undefined ? password : users[userIndex].password,
        direccion: direccion !== undefined ? direccion : users[userIndex].direccion,
        telefono: telefono !== undefined ? telefono : users[userIndex].telefono,
        tipoUsuario: tipoUsuario !== undefined ? tipoUsuario : users[userIndex].tipoUsuario,
        metodopagoPreferido: metodopagoPreferido !== undefined ? metodopagoPreferido : users[userIndex].metodopagoPreferido,
      };

      users[userIndex] = updatedUser;
      return updatedUser;
    },
    deleteUser: (_, { id }) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) return false;

      users.splice(userIndex, 1);
      return true;
    },
  },
};

module.exports = resolvers;
