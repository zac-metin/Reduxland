import React from 'react'


const Data = {
  store: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  reducer: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  actions: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  connected: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  app: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  index: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  api: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  server: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  routes: {
    name: "Routes",
    desc: "Hi",
    code: `var express = require('express')
var router = express.Router()

var bananasDb = require('../db/bananas')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  bananasDb.getBananas(db)
    .then(bananas => {
      res.json(bananas)
    })
})

module.exports = router`,
    test: "Test"
  },
  dbfunctions: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  database: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  seeds: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  },
  migrations: {
    name: "Store",
    desc: "Hi",
    code: "Hello",
    test: "Test"
  }
}

export default Data
