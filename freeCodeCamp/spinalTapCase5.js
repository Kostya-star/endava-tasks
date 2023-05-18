// 5) spinal tap case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  var regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.replace(regex, '-').toLowerCase();

  // did not solve it by myself
}

spinalCase('This Is Spinal Tap');

module.exports = spinalCase;

// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
// Waiting:spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// Waiting:spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
// Waiting:spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
// Waiting:spinalCase("AllThe-small Things") should return the string all-the-small-things.
