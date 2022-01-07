function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.increment = function () {
  this.age++;
}; 

student3 = new Student('Aaron', 22);  
student3 // Student {name: 'Aaron', age: 22}

student3.__proto__ // {increment: ƒ, constructor: ƒ} 
student3.increment(); 
student3 // Student {name: 'Aaron', age: 23}