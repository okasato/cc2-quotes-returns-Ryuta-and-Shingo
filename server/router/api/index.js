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
        send(res, OK, quotes, false);
      });
  });
  router.post('/', (req, res)=> {
    // console.log(req.body, req.params, "==================");
    return db.quotes.create(req.body)
    .then(quote => {
      send(res, OK, quote, false);
    })
  })


  return router;
};