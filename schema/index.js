const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    fetchTodos: [Todo],
    fetchTodo(id: ID!): Todo,
  }

  type Mutation {
    createTodo(input: TodoInput!): Todo,
    updateTodo(input: TodoInput!): Todo,
    destroyTodo(id: ID!): Todo,
  }

  type Todo {
    id: ID,
    text: String,
    complete: Boolean,
  }

  input TodoInput {
    id: ID,
    text: String,
    complete: Boolean,
  }
`);

module.exports = schema;
