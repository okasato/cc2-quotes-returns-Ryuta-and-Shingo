
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quotes', (table) => {
    table.increments()
      .index();
    table.text('quote')
      .unique()
      .notNullable()
      .index();
    table.integer('author_id')
      .unique()
      .index();
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('quotes');
};
