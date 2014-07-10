
var prompt = require('sync-prompt').prompt;

var mil = parseFloat(prompt('How far are you driving? ( in miles )'));
var pr = parseFloat(prompt('How much is gas per gallon? ( 00.00 )'));
var type = prompt('What type of car do you drive? ( car/truck )');
var mpg = parseFloat(prompt('What is your vehicles MPG rating? ( 25 )'));
var tank = parseFloat(prompt('How big is your gas tanks? ( 16 ) '));
var spd = parseFloat(prompt('How fast do you usually drive? ( 70 )'));




//calculate mpg
//

if (spd > 55){
  var dif = spd - 55;

  if ( type === 'car' ) {
    mpg = mpg - dif;
  } else {
    mpg = mpg - (3 * dif);
  }
  
  if (mpg < 10) {
    mpg = 10;
  }
}


//number of stops
//
var gal = mil / mpg;
var stops = Math.ceil(gal / tank);

//cost of trip
//
var cost = mil / mpg * pr;

console.log('You are driving ' + mil + ' miles.');
console.log('You will have to stop ' + stops + ' times and it will cost you ' + cost + ' dollars.');



