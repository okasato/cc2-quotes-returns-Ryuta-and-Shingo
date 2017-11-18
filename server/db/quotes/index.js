const list = require('./list');

module.exports = (knex) => {
  return {
    list: list(knex)
  }
}