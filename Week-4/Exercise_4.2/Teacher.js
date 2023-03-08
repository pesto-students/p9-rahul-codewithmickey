var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function () {
  Person.call(this);
};

Teacher.prototype.teach = function (subject) {
  this.subject = subject;
  console.log(
    `${this.name} is now teaching ${this.subject}`
  );
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher();
him.initialize("Amit", 43);
him.teach("English");