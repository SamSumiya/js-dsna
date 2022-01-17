function howSum(nums, target, memo = {}) {
  if (target === 0) return [];
  if (target < 0) return null;
  if (target in memo) return memo[target];

  for (let num of nums) {
    const remainder = target - num;

    if (howSum(nums, remainder, memo) !== null) {
      memo[target] = [...howSum(nums, remainder, memo), num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
}

howSum([2, 3], 7);
