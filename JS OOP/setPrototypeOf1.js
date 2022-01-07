// setPrototypeOf on the instance from the constructor

function createUnpaidUser(name, score) {
  this.name = name;
  this.score = score;
}

const unpaidUserFunctions = {
  increment: function () {
    this.score++;
  },
};
const user1 = new createUnpaidUser('User', 11);
// Creates {} 
Object.setPrototypeOf(user1, unpaidUserFunctions);
// user1.__proto__ + unpaidUserFunctions 
user1.increment();
user1;
user1.__proto__ // {increment: ƒ} 
