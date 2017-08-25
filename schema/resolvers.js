
const resolvers = {
  fetchTodos: async (data, { db }) => {
    const response = await db('todos').select('*');
    return Object.assign(response);
  },

  fetchTodo: async ({ id }, { db }) => {
    const response = await db('todos').where('id', id);
    return Object.assign(response[0]);
  },

  createTodo: async ({ input }, { db }) => {
    const response = await db('todos').insert(input, '*');
    return Object.assign(response[0]);
  },

  updateTodo: async ({ input }, { db }) => {
    const response = await db('todos').where('id', input.id).update(input, '*');
    return Object.assign(response[0]);
  },

  destroyTodo: async (data, { db }) => {
    await db('todos').where('id', data.id).del();
    return Object.assign(data);
  },
};

module.exports = resolvers;
