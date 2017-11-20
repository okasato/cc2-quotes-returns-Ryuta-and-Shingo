const list = require('./list');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');

module.exports = (knex) => {
  return {
    list: list(knex),
    create: create(knex),
    remove: remove(knex),
    update: update(knex)
  }
}