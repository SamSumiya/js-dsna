function diagonalDifference(arr) {
  // Write your code here
  let leftSide = 0;
  let rightSide = 0;

  for (let i = 0; i < arr.length; i++) {
    leftSide += arr[i][i];
    rightSide += arr[i][arr.length - i - 1];
  }

  return Math.abs(leftSide - rightSide);
}
