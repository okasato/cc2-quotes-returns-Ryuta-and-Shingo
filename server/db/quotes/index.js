const list = require('./list');
const create = require('./create');

module.exports = (knex) => {
  return {
    list: list(knex),
    create: create(knex)
  }
}