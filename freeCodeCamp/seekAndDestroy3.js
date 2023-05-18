//   3) seek and destroy
function destroyer(arr, ...args) {
  return arr.filter((num) => !args.includes(num));
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// Waiting:destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// Waiting:destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// Waiting:destroyer([2, 3, 2, 3], 2, 3) should return [].
// Waiting:destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// Waiting:destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
