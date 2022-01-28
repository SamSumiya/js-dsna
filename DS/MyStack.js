class MyStack {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  myPush(data) {
    this.data[this.length] = data;
    this.length++;
    return this.length;
  }

  myPop() {
    const lastData = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastData;
  }

  myShift() {
    const firstData = this.data[0];
    this.shiftHelperFn();
    this.length--;
    return firstData;
  }

  myUnshift(input) {
    let self = this;

    function inner() {
      const lastData = self.data[self.length - 1];
      const copyData = { ...self.data };

      for (let i = 0; i < self.length - 1; i++) {
        self.data[i + 1] = copyData[i];
      }

      self.data[0] = input;
      self.data[self.length] = lastData;
      self.length++;
      return self.length;
    }
    return inner();
  }

  myDelete(index) {
    const deletedData = this.data[index];
    this.shiftHelperFn(index);
    this.length--;
    return deletedData;
  }

  shiftHelperFn(index = 0) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

const stack1 = new MyStack();
stack1.myPush('hello');
stack1.myPush('^&*^*&');
stack1.myPush('world');
stack1.myPush('!!');
stack1.myPush(':(');
stack1.myPop();
stack1.myShift();
stack1.myShift();
console.log(stack1.myUnshift('111'));
console.log(stack1.myUnshift('222'));
stack1.myPop();
stack1.myShift();
console.log(stack1.myUnshift('222'));
console.log(stack1.myUnshift('111'));
console.log(stack1.myUnshift('222'));
stack1.myDelete(4);
stack1.myDelete(2);
console.log(stack1.myUnshift('222'));
stack1.myShift();
stack1.myShift();
stack1.myPush('hello');
stack1.myPush('world');
stack1.myUnshift(':)');
stack1;
