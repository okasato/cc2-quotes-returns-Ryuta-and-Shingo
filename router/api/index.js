'use strict';

const router = require('express').Router();

const OK = 200;

module.exports = (db) => {
  router.get('/', (req, res) => {
    return db.quotes.list()
      .then((quotes) => {
        send(res, OK, quotes, false);
      });
  });

  return router;
};