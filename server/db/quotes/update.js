module.exports = (knex) => {
  return (data) => {
    return knex('authors')
      .returning('id')
      .insert({name: data.author})
    .then((id) => {
      return knex('quotes')
       .where('id', data.index)
       .update({quote: data.quote, author_id: id[0]}) 
    })
  }
};