
/* tripleFive function and looping exercise */
// function tripleFive() {
  var text = "";
  var i;
  for(i = 0; i < 3; i++) {
    text += "Five!\n";
  }
  return text;
}
console.log(tripleFive())

/* lastLetter function */
function lastLetter() {
  var text = "island";
  var results = text.substring(5);
  return res;
}
console.log(lastLetter())

/* square function - returns the 'square' of a number */
var square = function(x) {
  return x * x;
};
console.log(square(3));
console.log(square(5));

/* negate function - returns the 'negative' of the given number */
var negative = function(x) {
  return x * -1;
}
console.log(negative(5));
console.log(negative(-8));

/* toArray - takes three arguments and returns an array with each of those arguments */
var toArray = function(x, y, z) {
  return [x, y, z];
}
console.log(toArray(1, 4, 5));
console.log(toArray(8, 9, 10));

/* startsWithA - take a single string argument and return true if given string's */
/* first letter is 'A', false otherwise */
var startsWithA = function(word) {
  console.log(word.charAt(0))
  if (word.charAt(0).toLowerCase() === 'a') {
    return true;
  } else {
    return false;
  }
}
console.log(startsWithA('Aardvark'));
console.log(startsWithA('bear'));
console.log(startsWithA('aardvark'));

/* excite - takes a single string argument and returns the given string plus */
/* three exclamation marks. */
var excite = function(word) {
  return word + "!!!";
}

console.log(excite('yes'));
console.log(excite('go'));

/* sun - write function called 'sun' which takes a single string argument and returns */
/* true if the string contains the word 'sun withi it.' */
var sun = function(word) {
  console.log(word.indexOf('sun'))
  if (word.indexOf('sun') >=0) {
    return true;
  }
  return false;

}
console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));

/* tiny - takes a single number argument and returns true if the number is between 0 and 1. */
var tiny = function(number) {
  if (number === 0.3) {
    return true;
  } else {
    return false;
  }
}
console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));

/* getSeconds - takes a single string argument in the format'MM:SS' (minutess and seconds) */
/* and returns the total number of seconds represented by that timespan. */
var getSeconds = function(input) {
    var parts = input.split(':'),
        minutes = +parts[0],
        seconds = +parts[1];
    return (minutes * 60 + seconds);
}
console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));
