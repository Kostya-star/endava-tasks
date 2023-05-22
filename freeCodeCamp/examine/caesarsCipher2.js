const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const charTranslation = (char) => {
  if (!alphabet.includes(char)) {
    return char
  }

  const initialCharIndex = alphabet.indexOf(char)
  const translatedCharIndex = initialCharIndex + 13

  const translatedChar = alphabet[translatedCharIndex] === undefined ? alphabet[translatedCharIndex - alphabet.length] : alphabet[translatedCharIndex]

  return translatedChar
}

function rot13(str) {
  const splitted = str.split('')
  return splitted.map(charTranslation).join('');
}

rot13("SERR PBQR PNZC");