module.exports = (knex) => {
  return () => {
    return knex('quotes')
      .innerJoin('authors', 'quotes.author_id', 'authors.id')
      .select(
        'quotes.id as id',
        'quotes.quote as quote',
        'authors.name as author'
      )
    .catch((err) => {
      console.log(err);
    });
  }
};

