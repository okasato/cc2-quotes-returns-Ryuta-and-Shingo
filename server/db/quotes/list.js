module.exports = (knex) => {
  return () => {
    console.log("---inside quotes/list")
    return knex('quotes').select()
    .catch((err) => {
      console.log(err);
    });
  }
};