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
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

spinalCase('thisIsSpinalTap');

// 6) Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  var regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.replace(regex, '-').toLowerCase();

  // did not solve it by myself
}

spinalCase('This Is Spinal Tap');

// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
// Waiting:spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// Waiting:spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
// Waiting:spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
// Waiting:spinalCase("AllThe-small Things") should return the string all-the-small-things.
