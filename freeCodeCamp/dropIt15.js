function dropElements(arr, func) {
  return typeof arr.find(func) === 'undefined'
    ? []
    : arr.slice(arr.indexOf(arr.find(func)));
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

//   dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// Waiting:dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// Waiting:dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// Waiting:dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// Waiting:dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// Waiting:dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
