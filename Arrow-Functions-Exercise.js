/*
ES5 Map Callback
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
*/

// ES2015 Arrow Functions Shorthand:

const double = (arr) => arr.map((val) => val * 2);

/*
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

*/

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvens = (numbers) =>
  numbers.map((val) => val ** 2).filter((squared) => squared % 2 === 0);
//Auto format does not let it be in one line
