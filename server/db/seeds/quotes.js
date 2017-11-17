const quotesJSON = require('../data/quotes.json');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries from quotes
  return knex('quotes').del()
    .then(() => {
      // Need to get all the authors we currently have because we need their IDs!
      return knex('authors').select();
    })
    .then((authors) => {
      // Create a hashmap of authors
      const authorsMap = {};
      authors.forEach((author) => {
        authorsMap[author.name] = author.id;
      });
      // Create our seed data
      const data = quotesJSON.map((quote) => {
        return {
          quote: quote.quote,
          author_id: authorsMap[quote.author]
        };
      });
      // Insert into our quotes table
      return knex('quotes').insert(data);
    });
};