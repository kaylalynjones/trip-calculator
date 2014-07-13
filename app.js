
var prompt = require('sync-prompt').prompt;

var mileage = prompt('How far are you driving? ( in miles )');
var price = prompt('How much is gas per gallon? ( 00.00 )');
var type = prompt('What type of car do you drive? ( car/truck )');
var mpg = prompt('What is your vehicles MPG rating? ( 25 )');
var tank = prompt('How big is your gas tanks? ( 16 ) ');
var speed = prompt('How fast do you usually drive? ( 70 )');

mileage = parseFloat(mileage);
price = parseFloat(price);
mpg = parseFloat(mpg);
tank = parseFloat(tank);
speed = parseFloat(speed);



//calculate mpg
//

if (speed > 55){
  var dif = speed - 55;

  if ( type === 'car' ) {
    mpg -= dif;
  } else {
    mpg -= (3 * dif);
  }

  if (mpg < 10) {
    mpg = 10;
  }
}


var gallons = mileage / mpg;
var stops = Math.ceil(gallons / tank);
var cost = gallons * price;

console.log('You are driving ' + mileage + ' miles.');
console.log('You will have to stop ' + stops + ' times and it will cost you ' + cost.toFixed(2) + ' dollars.');



