const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!) Order
    checkout(products: [ID]!): Checkout
  }
`;

module.exports = typeDefs;