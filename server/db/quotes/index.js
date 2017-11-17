const list = require('./list');

module.exports = (knex) => {
  console.log("---inside quotes/index func");
  return {
    list: list(knex)
  }
}