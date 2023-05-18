// 1) sum all numbers in a range
function sumAll(arr) {
  const newArr = arr.sort((a, b) => a - b);

  let sum = 0;
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    sum += i
  }

  return sum;
}

console.log(sumAll([1,5]));

module.exports = sumAll

//   sumAll([1, 4]) should return a number.
// Waiting:sumAll([1, 4]) should return 10.
// Waiting:sumAll([4, 1]) should return 10.
// Waiting:sumAll([5, 10]) should return 45.
// Waiting:sumAll([10, 5]) should return 45.
