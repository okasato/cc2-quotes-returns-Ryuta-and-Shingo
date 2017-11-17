'use strict';

const router = require('express').Router();

const OK = 200;

const send = (res, code, data, json = true) => { //send a response
  res.status(code).send(json ? JSON.stringify(data) : data);
};

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