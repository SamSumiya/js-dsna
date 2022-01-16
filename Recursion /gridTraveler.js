function x(m, n, memo = {}) {
  let key = m.toString() + ',' + n.toString();
  console.log(key);
  if (key in memo) return memo[key];
  // if (n in memo2) return memo2[n]
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] = x(m - 1, n, memo) + x(m, n - 1, memo);
  return memo[key];
}

x(18, 18);
