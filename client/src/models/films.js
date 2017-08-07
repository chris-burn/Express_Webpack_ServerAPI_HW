// dependencies: film.js, review.js
var Film = require("./film.js");
var Review = require("./review.js");

var filmsArr = [];

var Films = function(){

  var review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Val"
  });

  var review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 100,
    author: "Val"
  });

  var review3 = new Review({
    author: "Kieran",
    rating: 13,
    comment: "Uhhh..."
  });


  var film1 = new Film({
    title: "Now You See Me",
    actors: ["Woody Harrelson", "Jesse Eisenberg"]
  });

  var film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"]
  });

  var film3 = new Film({
    title: "The Room",
    actors: ["Tommy Wiseau", "Greg Sestero"]
  });

  film1.addReview(review1);
  film2.addReview(review2);
  film3.addReview(review3);

  collateFilm(film1);
  collateFilm(film2);
  collateFilm(film3);

  // console.log(filmsArr);

  return filmsArr;
}

var collateFilm = function(film){
  filmsArr.push(film);
};




module.exports = Films;