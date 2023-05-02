// 1) sum all numbers in a range
function sumAll(arr) {
    arr.sort((a, b) => a - b)
  
    let sum = 0
    for(let i = arr[0]; i <= arr[1]; i++) {
      sum = sum + i
    }
  
    return sum
  }
  
  sumAll([1, 4]);

//   2) DIFF two arrays
function diffArray(arr1, arr2) {

    let missingItems = [];
  
    // arr1.forEach(itemArr1 => {
    //   arr2.forEach(itemArr2 => {
    //     if(!arr2.includes(itemArr1)) {
    //       missingItems.push(itemArr1)
    //     }
    //     if(!arr1.includes(itemArr2)) {
    //       missingItems.push(itemArr2)
    //     }
  
    //   })
    // }) THIS SOLUTION DID NOT WORK
  
    const arr1Unique = arr1.filter(item => !arr2.includes(item))
    const arr2Unique = arr2.filter(item => !arr1.includes(item))
  
    missingItems = [...arr1Unique, ...arr2Unique]
  
    return missingItems;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//   3) seek and destroy
function destroyer(arr, ...args) {
    arr = arr.filter(num => !args.includes(num))
    return arr
  }
  
  destroyer([1, 2, 3, 5, 1, 2, 3], 2,3)

//   4)wherefore art tho
function whatIsInAName(collection, source) {

    // let filteredArr = []

    //   // console.log(Object.keys(source))
    //   // console.log(Object.values(source))
    //   // console.log(Object.entries(source))

      // collection.forEach(obj => {

      //   Object.keys(source).forEach(_key => {
      //     if(obj[_key] && obj[_key] === source[_key]) {
      //       console.log(obj)
      //     }
      //   })
      // }) 
    return collection.filter(function(obj) {
    return Object.keys(source).every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  // SOLVED WITH CHAT GPT
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

// 5) spinal tap case
function spinalCase(str) {
    // const isLetter = (letter) => {
    //   return letter.toLowerCase() !== letter.toUpperCase()
    // }
  
    // str = str.split('').filter(letter => isLetter(letter)).join('')
    // str = str.toLowerCase().replace(/[^a-z]/g, ' ').split(' ').filter(char => char).join('-')
    // str = str.split('').filter(char => {
    //   if(!char.match(/[^a-z]/) || char)
    // })
  
    // console.log(str)
    // return str;
    // Create a variable for the white space and underscores.
    
    // DID NOT WORK, HAD TO USE THE HINT
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
  }
  
  spinalCase('thisIsSpinalTap');