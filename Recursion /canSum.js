function canSum(nums, target, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  console.log(memo);
  for (let num of nums) {
    const remainder = target - num;
    if (canSum(nums, remainder, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}

canSum([7, 14], 300);
