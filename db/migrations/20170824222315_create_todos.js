
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', function(t) {
    t.increments('id').primary();
    t.string('text').notNullable();
    t.boolean('complete').defaultTo( false );
    t.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todos');
};
