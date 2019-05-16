function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
}

function isPalindromes(str) {
  return str === reverse(str);
}

module.exports = isPalindromes;
