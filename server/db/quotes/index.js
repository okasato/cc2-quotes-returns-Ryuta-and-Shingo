const list = require('./list');
const create = require('./create');
const remove = require('./remove');

module.exports = (knex) => {
  return {
    list: list(knex),
    create: create(knex),
    remove: remove(knex)
  }
}