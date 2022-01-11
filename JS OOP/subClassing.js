function createUser(name, score) {
  const newUser = Object.create(userFunctions)
  newUser.name = name
  newUser.score = score
  return newUser
}

const userFunctions = { 
  incrementScore: function() {
    this.score++ 
  }, 
  sayHi: function() {
    console.log(this.name)
  }
}

const user1 = createUser('max', 11)

function createPaidUser(name, score, bonus) {
  const newPaidUser = createUser(name, score)
  Object.setPrototypeOf(newPaidUser, paidUserFunctions)
  newPaidUser.bonus = bonus
  return newPaidUser
}

const paidUserFunctions = {
  incrementBonus: function () {
    this.bonus++ 
  }
}

Object.setPrototypeOf(paidUserFunctions, userFunctions)

const paidUser = new createPaidUser('Billy', 11, 0)
paidUser.incrementBonus() 
paidUser.incrementScore() 
paidUser.sayHi()