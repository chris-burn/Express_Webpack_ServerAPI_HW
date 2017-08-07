var express = require("express");
var router = new express.Router();

router.use("/films", require("./films"));

router.get("/", function(req, res){
  res.json({data: "Splash-page, please go to '/films'"});
})

router.get("/about", function(req, res){
  res.json({data: "I built this to aggregate films and reviews"});
});

module.exports = router;