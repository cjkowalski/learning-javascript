// function Person(firstName, lastName) {
//   var secret = 'tacosarelove';


//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.hasJob = false;

//   // function constructors => old way of doing classes
//   this.fullName = function() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   this.setFirstName = function(firstName) {
//     this.firstName = firstName;
//   }

//   this.setLastName = function(lastName) {
//     this.lastName = lastName;
//   }

//   this.getSecret = function() {
//     return secret;
//   }
// }

// var person1 = new Person('Stephen', 'Mayeux')

// console.log(person1);

// console.log(person1.fullName());

// person1.setFirstName('Steve')

// console.log(person1.fullName());

// var person2 = new Person('Charlie', 'Mayeux')

// var person3 = new Person('Gina', 'Mayuex')

// console.log(person3.getSecret())







// class Person {
//   constructor method
//   constructor(firstName, lastName) {      
//     this.firstName = firstName;
//     this.latName = lastName;
//     this.hasJob = false;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

//   setFirstName(firstName) {
//     this.firstName = firstName
//   }

//   setLastName(lastName) {
//     this.lastName = lastName;
//   }
// }








// // static class method
// class Person {
//   // static => belongs to the class Person
//   static species() {
//     return 'Homo sapiens';
//   }

//   static speciesSentence() {
//     return `Humans are classified as ${this.species()}`;
//   }

//   // constructor method
//   constructor(firstName, lastName) {      
//     this.firstName = firstName;
//     this.latName = lastName;
//     this.hasJob = false;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

//   setFirstName(firstName) {
//     this.firstName = firstName
//   }

//   setLastName(lastName) {
//     this.lastName = lastName;
//   }
// }

// var person1 = new Person('Stephen', 'Mayeux')

// console.log(person1.firstName)

// console.log(person1.species)

// console.log(Person.species())

// console.log(Person.speciesSentence())







// // static class method
// class Person {
//   // static method => belongs to the class Person
//   static species() {
//     return 'Homo sapiens';
//   }

//   static speciesSentence() {
//     return `Humans are classified as ${this.species()}`;
//   }

//   // constructor method
//   constructor(firstName, lastName) {      
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.hasJob = false;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

//   setFirstName(firstName) {
//     this.firstName = firstName
//   }

//   setLastName(lastName) {
//     this.lastName = lastName;
//   }
// }

// class Worker extends Person {
//   constructor(firstName, lastName, job) {       // calls constructor method of Person class (bc extending from Person)
//     super(firstName, lastName);
//     this.job = job;                   // additional initilzation
//     this.hasJob = true;               // overriding
//   }   

//   setJob(job) {
//     this.job = job;
//   }
// }

// const worker1 = new Worker('Stephen', 'Mayeux', 'Software Developer');

// console.log(worker1)

// console.log(worker1.fullName())







// // static class method
// class Person {
//   // static method => belongs to the class Person
//   // static get method
//   static get species() {
//     return 'Homo sapiens';
//   }

//   static speciesSentence() {
//     return `Humans are classified as ${this.species}`;
//   }

//   // constructor method
//   constructor(firstName, lastName) {      
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.hasJob = false;
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

//   setFirstName(firstName) {
//     this.firstName = firstName
//   }

//   setLastName(lastName) {
//     this.lastName = lastName;
//   }
// }

// class Worker extends Person {
//   // calls constructor method of Person class (bc extending from Person)
//   constructor(firstName, lastName, job) {       
//     super(firstName, lastName);
//     // additional initilzation    
//     this.job = job;     
//     // overriding         
//     this.hasJob = true;               
//   }   

//   setJob(job) {
//     this.job = job;
//   }

//   // works like a property now! => can call it with worker1.biography
//   get biography() {       
//     const bio = `${this.fullName()} is a ${this.job}`.toLowerCase();
//     return bio;
//   }
// }

// const worker1 = new Worker('Stephen', 'Mayeux', 'Software Developer');
// // console.log(worker1.biography())
// console.log(worker1.biography)

// console.log(Worker.species)









class Person {
  static get species() {
    return 'Homo sapiens';
  }

  static speciesSentence() {
    return `Humans are classified as ${this.species}`;
  }

  constructor(firstName, lastName) {      
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  set setFullName(name) {
    name = name.split(' ');
    this.setFirstName(name[0]);
    this.setLastName(name[1]);
  }
}

class Worker extends Person {
  constructor(firstName, lastName, job) {       
    super(firstName, lastName);
    this.job = job;     
    this.hasJob = true;               
  }   

  setJob(job) {
    this.job = job;
  }

  get biography() {       
    const bio = `${this.fullName()} is a ${this.job}`.toLowerCase();
    return bio;
  }
}

// const person1 = new Person('Stephen', 'Mayeux');

// person1.setFirstName('Steve')
// person1.setLastName('Meyer')

// console.log(person1.fullName())

const person1 = new Person('Stephen', 'Mayeux');

person1.setFullName = 'Steve Meyers'

console.log(person1.fullName)