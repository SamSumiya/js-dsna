const MyStack = function () {
  this.storage = {};
  this.count = 0;

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
    return value;
  };

  this.peek = function () {
    return this.storage[this.count];
  };

  this.look = function () {
    return this.storage[0];
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    const result = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return result;
  };

  this.shift = function () {
    const result = this.storage[0];
    delete this.storage[0];

    for (let key in this.storage) {
      const k = +key - 1;
      this.storage[k] = this.storage[key];
      delete this.storage[key];
    }
    this.count--;
    return result;
  };

  this.unshift = function (value) {
    const newValue = { 0: value };
    const copyObj = {};
    for (let key in this.storage) {
      const k = +key + 1;
      copyObj[k] = this.storage[key];
    }
    this.count++;
    this.storage = { ...copyObj, ...newValue };
    return this.storage;
  };

  this.isEmpty = function () {
    return this.count === 0;
  };
};

const stack1 = new MyStack();
stack1.push('xx');
stack1.push('yy');
stack1.push('zz');
stack1.push('ww');
console.log(stack1.shift());
console.log(stack1.shift());
console.log(stack1.unshift('aaa'));
console.log(stack1.unshift('bbb'));
console.log(stack1.unshift('ccc'));
console.log(stack1.unshift('ddd'));
console.log(stack1.look());
console.log(stack1.isEmpty());
console.log(stack1);
