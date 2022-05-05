var containsDuplicate = function(nums) {
    const newSet = new Set(nums) 
    const uniqArr = Array.from(newSet) 
    
    return !(uniqArr.length === nums.length)
};