'use strict';

var url = require('url');

var Pets = require('./PetsService');

module.exports.addPet = function addPet (req, res, next) {
  Pets.addPet(req.swagger.params, res, next);
};

module.exports.deletePet = function deletePet (req, res, next) {
  Pets.deletePet(req.swagger.params, res, next);
};

module.exports.findPetsByStatus = function findPetsByStatus (req, res, next) {
  Pets.findPetsByStatus(req.swagger.params, res, next);
};

module.exports.findPetsByTags = function findPetsByTags (req, res, next) {
  Pets.findPetsByTags(req.swagger.params, res, next);
};

module.exports.getPetById = function getPetById (req, res, next) {
  Pets.getPetById(req.swagger.params, res, next);
};

module.exports.updatePet = function updatePet (req, res, next) {
  Pets.updatePet(req.swagger.params, res, next);
};

module.exports.updatePetWithForm = function updatePetWithForm (req, res, next) {
  Pets.updatePetWithForm(req.swagger.params, res, next);
};

module.exports.uploadFile = function uploadFile (req, res, next) {
  Pets.uploadFile(req.swagger.params, res, next);
};
