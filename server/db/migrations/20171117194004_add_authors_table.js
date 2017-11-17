
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', (table) => {
    table.increments()
      .index();
    table.string('name', 255)
      .unique()
      .notNullable()
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
