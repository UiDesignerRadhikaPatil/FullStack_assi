"use strict";

// backend/routes/storeRoutes.js
var express = require('express');

var Store = require('../models/Store');

var router = express.Router(); // Get all stores

router.get('/', function _callee(req, res) {
  var stores;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Store.find());

        case 3:
          stores = _context.sent;
          res.json(stores);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: 'Server error'
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Add new store

router.post('/', function _callee2(req, res) {
  var _req$body, name, address, rating, store;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, address = _req$body.address, rating = _req$body.rating;
          _context2.prev = 1;
          store = new Store({
            name: name,
            address: address,
            rating: rating
          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(store.save());

        case 5:
          res.status(201).json(store);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: 'Server error'
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
module.exports = router;
//# sourceMappingURL=storeRoutes.dev.js.map
