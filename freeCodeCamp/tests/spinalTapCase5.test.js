const spinalCase = require('../spinalTapCase5');

describe('spinalCase', () => {
  test('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', () => {
    expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap');
  });
  test('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', () => {
    expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap');
  });
  test('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', () => {
    expect(spinalCase('The_Andy_Griffith_Show')).toBe('the-andy-griffith-show');
  });
  test('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', () => {
    expect(spinalCase('Teletubbies say Eh-oh')).toBe('teletubbies-say-eh-oh');
  });
  test('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', () => {
    expect(spinalCase('AllThe-small Things')).toBe('all-the-small-things');
  });
});
