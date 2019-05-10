function join(str, concatStr) {
  let ans = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i === str.length - 1) {
      ans += str[i];
    } else {
      ans = ans + str[i] + concatStr;
    }
  }
  return ans;
}

function repeat(str, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  }
  return result;
}

console.log(join('a', '!'));
console.log(repeat('a', 5));
