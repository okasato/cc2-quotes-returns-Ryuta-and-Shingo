'use strict';

const router = require('express').Router();

const OK = 200;

module.exports = (db) => {
  router.get('/', (req, res) => {
    return db.quotes.list()
      .then((quotes) => {
        console.log(quotes, "----this should equal 1");
        send(res, OK, quotes, false);
      });
  });

  return router;
};