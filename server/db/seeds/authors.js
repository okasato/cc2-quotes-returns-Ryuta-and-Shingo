const authorsJSON = require('../data/authors.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries from quotes
  return knex('authors').del()
    .then(() => {
      // Need to get all the authors we currently have because we need their IDs!
      return knex('authors').insert(authorsJSON);
    })
};