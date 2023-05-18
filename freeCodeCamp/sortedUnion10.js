function uniteUnique(...arr) {
  const flatened = arr.flat();

  const filteredArr = [];

  flatened.forEach(
    (num) => !filteredArr.includes(num) && filteredArr.push(num)
  );
  return filteredArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// Waiting:uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// Waiting:uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// Waiting:uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
// Waiting:uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
