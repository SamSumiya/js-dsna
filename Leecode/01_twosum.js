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

// used Map to keep track of the data
var twoSum = function (numbers, target) {
    const map = new Map() 
    
    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(numbers[i], i )
    }
};

