const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    fetchTodos: [Todo],
    fetchTodo(id: ID!): Todo,
  }

  type Todo {
    id: Int,
    text: String,
    complete: Boolean,
  }
`);

module.exports = schema;
