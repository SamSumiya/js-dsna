var romanToInt = function (s) {
  const ROMANINTEFERS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (ROMANINTEFERS[s[i]] < ROMANINTEFERS[s[i + 1]]) {
      result += ROMANINTEFERS[s[i + 1]] - ROMANINTEFERS[s[i]];
      i++;
    } else if (ROMANINTEFERS[s[i]] > ROMANINTEFERS[s[i + 1]]) {
      result += ROMANINTEFERS[s[i]];
    } else if (ROMANINTEFERS[[s[i]]] !== undefined) {
      result += ROMANINTEFERS[s[i]];
    }
  }
  return result;
};
