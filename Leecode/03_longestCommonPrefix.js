var longestCommonPrefix = function(strs) {

    const baseWord = strs[0]

    for (let i = 0; i < baseWord.length; i++) {
        for (let word of strs) {
            if (word[i] !== baseWord[i]) {
                return word.substring(0, i)
            }
        }
    }
    return strs[0]
}

var longestCommonPrefix = function(strs) {
    const word = strs[0]
    let ans = ''
    for (let i = 0; i < strs[0].length; i++) {
      let el = strs[0][i]
        if (strs.every(w => w.slice(i, i+1).includes(el))) {
            ans += el
        } else {break}
    }

    return ans
};
