const modifyStr = (str) => {
  return str.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '');
};

function palindrome(str) {
  const reversedStr = str.split('').reverse().join('');

  return modifyStr(reversedStr) === modifyStr(str);
}

palindrome('A man, a plan, a canal. Panama');
