'use strict';

var url = require('url');

var Stores = require('./StoresService');

module.exports.deleteOrder = function deleteOrder (req, res, next) {
  Stores.deleteOrder(req.swagger.params, res, next);
};

module.exports.getInventory = function getInventory (req, res, next) {
  Stores.getInventory(req.swagger.params, res, next);
};

module.exports.getOrderById = function getOrderById (req, res, next) {
  Stores.getOrderById(req.swagger.params, res, next);
};

module.exports.placeOrder = function placeOrder (req, res, next) {
  Stores.placeOrder(req.swagger.params, res, next);
};
