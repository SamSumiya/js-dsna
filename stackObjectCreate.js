function stack() {
  const newStack = Object.create(stackFunctions);
  newStack.storage = {};
  newStack.count = 0;
  return newStack;
}

const stackFunctions = {
  push: function (value) {
    this.storage[this.count] = value;
    this.count++;
    return value;
  },
  pop: function () {
    if (this.count <= 0) console.log('Nothing in the stack to pop...');
    const popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return popped;
  },
  peek: function () {
    const lastElement = this.storage[this.count - 1];
    if (lastElement) {
      console.log(lastElement);
    }
    console.log('Empty Stack...');
  },
  length: function () {
    return this.count;
  },
  shift: function () {
    const firstElement = this.storage[0];
    delete this.storage[0];
    for (let key in this.storage) {
      this.storage[+key - 1] = this.storage[key];
      delete this.storage[key];
    }
    this.count--;
    return firstElement;
  },
  unshift: function (value) {
    const newValue = { 0: value };
    const objCopy = {};
    for (let key in this.storage) {
      objCopy[+key + 1] = this.storage[key];
    }
    this.storage = { ...objCopy, ...newValue };
    this.count++;
    return newValue;
  },
};
