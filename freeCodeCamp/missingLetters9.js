function fearNotLetter(str) {
  const sample = 'abcdefghijklmnopqrstuvwxyz';

  const slicedFromSample = sample.slice(
    sample.indexOf(str[0]),
    sample.indexOf(str[str.length - 1]) + 1
  );
  return slicedFromSample.split('').find((char) => !str.includes(char));
}

fearNotLetter('abcdefghjklmno');

//   fearNotLetter("abce") should return the string d.
// Waiting:fearNotLetter("abcdefghjklmno") should return the string i.
// Waiting:fearNotLetter("stvwx") should return the string u.
// Waiting:fearNotLetter("bcdf") should return the string e.
// Waiting:fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
