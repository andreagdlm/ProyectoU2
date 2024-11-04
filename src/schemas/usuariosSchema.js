// usuariosSchema.js

const { gql } = require('apollo-server');

const typeDefs = gql`
  type Usuario {
    id: String!
    nombreCompleto: String!
    email: String!
    password: String!
    direccion: String
    telefono: String
    fechaRegistro: String
    tipoUsuario: String
    metodopagoPreferido: [String]
  }

  type Query {
    listUsers: [Usuario]
  }

  type Mutation {
    createUser(           
      nombreCompleto: String!
      email: String!
      password: String!
      direccion: String
      telefono: String
      tipoUsuario: String
      metodopagoPreferido: [String]
    ): Usuario

    updateUser(
      id: String!
      nombreCompleto: String
      email: String
      password: String
      direccion: String
      telefono: String
      tipoUsuario: String
      metodopagoPreferido: [String]
    ): Usuario

    deleteUser(id: String!): Boolean
  }
`;

module.exports = typeDefs;
