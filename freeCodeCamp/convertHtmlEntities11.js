function convertHTML(str) {
  const charsTranslation = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };

  return str
    .split('')
    .map((char) => (char in charsTranslation ? charsTranslation[char] : char))
    .join('');
}

convertHTML('Dolce & Gabbana');

//   convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
// Waiting:convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
// Waiting:convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
// Waiting:convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
// Waiting:convertHTML("Schindler's List") should return the string Schindler&apos;s List.
// Waiting:convertHTML("<>") should return the string &lt;&gt;.
// Waiting:convertHTML("abc") should return the string abc.
