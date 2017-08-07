var express = require("express");
var filmRouter = new express.Router();
var Films = require('../client/src/models/films')();

var path = require('path');

// from server.js
filmRouter.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

filmRouter.get("/:id", function(req, res){
  // request lives in the PARAMS of req 
  var index = req.params.id;
  res.json({data: Films[index]});
});

// request lives inside the BODY
filmRouter.post("/", function(req, res){
  Films.push(req.body.film);
  res.json({data: Films});
});

// updating a film
filmRouter.put("/:id", function(req, res){
  Films[req.params.id] = req.body.film;
  res.json(Films);
});

// no easy way to delete from array in JS (even Lodash!)
filmRouter.delete("/:id", function(req, res){
  Films.splice(req.params.id, 1);
  res.json({data: Films});
});

module.exports = filmRouter;