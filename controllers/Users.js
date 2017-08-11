'use strict';

var url = require('url');

var Users = require('./UsersService');

module.exports.createUser = function createUser (req, res, next) {
  Users.createUser(req.swagger.params, res, next);
};

module.exports.createUsersWithArrayInput = function createUsersWithArrayInput (req, res, next) {
  Users.createUsersWithArrayInput(req.swagger.params, res, next);
};

module.exports.createUsersWithListInput = function createUsersWithListInput (req, res, next) {
  Users.createUsersWithListInput(req.swagger.params, res, next);
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  Users.deleteUser(req.swagger.params, res, next);
};

module.exports.getUserByName = function getUserByName (req, res, next) {
  Users.getUserByName(req.swagger.params, res, next);
};

module.exports.loginUser = function loginUser (req, res, next) {
  Users.loginUser(req.swagger.params, res, next);
};

module.exports.logoutUser = function logoutUser (req, res, next) {
  Users.logoutUser(req.swagger.params, res, next);
};

module.exports.updateUser = function updateUser (req, res, next) {
  Users.updateUser(req.swagger.params, res, next);
};
