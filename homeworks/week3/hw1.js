function makestar(i) {
  let ans = '';
  for (let j = 1; j <= i; j += 1) {
    ans += '*';
  }
  return ans;
}

function stars(n) {
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    result.push(makestar(i));
  }
  return result;
}

module.exports = stars;
