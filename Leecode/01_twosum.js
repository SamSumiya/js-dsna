var twoSum = function (numbers, target) {
  const hash = {};

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    if (hash[complement] !== undefined) {
      return [hash[complement], i];
    }
    hash[numbers[i]] = i;
  }
};
