module.exports = (knex) => {
  return (data) => {
    // const data = JSON.parse(data);
    console.log(data);
    return knex('quotes')
      .where('id', JSON.parse(data.index))
      .del()
      .catch(err => {
        console.log(err);
      })
  }
};
