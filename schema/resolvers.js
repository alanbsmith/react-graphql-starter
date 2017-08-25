
const resolvers = {
  fetchTodos: async (data, { db }) => {
    const response = await db('todos').select('*');
    return Object.assign(response);
  },

  fetchTodo: async ({ id }, { db }) => {
    const response = await db('todos').where('id', id);
    return Object.assign(response[0]);
  },
};

module.exports = resolvers;
