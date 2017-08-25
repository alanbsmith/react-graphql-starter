
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, text: 'mow the lawn', complete: false },
        { id: 2, text: 'paint the bedroom', complete: true },
        { id: 3, text: 'hang curtains', complete: false },
        { id: 4, text: 'do laundry', complete: true },
        { id: 5, text: 'water the grass', complete: true },
        { id: 6, text: 'get groceries', complete: false },
      ]);
    });
};
