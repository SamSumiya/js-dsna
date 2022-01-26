//Mofify .map() to print '🗺' at the end of each item.

Array.prototype.map = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(`${this[i]}🗺`);
  }
};

console.log([1, 2, 3].map());

//1🗺, 2🗺, 3🗺
