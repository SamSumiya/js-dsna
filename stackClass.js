class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
    return value;
  }

  pop() {
    if (this.count <= 0) {
      console.log(`You have nothing in stack...`);
    }
    const popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return popped;
  }

  peek() {
    const lastElement = this.storage[this.count - 1];
    if (!lastElement) console.log('Empty Stack...');
    console.log(lastElement);
  }

  shift() {
    if (this.count <= 0) {
      console.log(`You have nothing in stack...`);
    }
    const result = this.storage[0];
    delete this.storage[0];
    this.count--;
    return result;
  }

  unshift(value) {
    const newValue = { 0: value };
    const copyObj = {};
    for (let key in this.storage) {
      let newKey = +key + 1;
      copyObj[newKey] = this.storage[key];
    }
    this.count++;
    this.storage = { ...newValue, ...copyObj };
  }
}

const s = new Stack();
s.push('a');
s.push('b');
console.log(s.peek());
s.unshift('new Value');
s;
