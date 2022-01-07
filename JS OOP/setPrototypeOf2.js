function Student(name, age) {
  this.name = name
  this.age = age
}

const studentFunction = {
  increment: function () {
    this.age++ 
  }
}

Object.setPrototypeOf(Student, studentFunction)
const proto = Object.getPrototypeOf(Student)

const student1 = new Student('Student1', 11); // Student {name: 'Student1', age: 12} 
Object.setPrototypeOf(student1, proto);

student1.__proto__ // {increment: ƒ} 
