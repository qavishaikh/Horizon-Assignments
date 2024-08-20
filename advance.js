// import { add, subtract } from './math.js';

// Arrow functions provide a shorter syntax for writing functions.
// Traditional function
// function adda(a, b) {
//     return a + b;
//   }
  
  // Arrow function
  // const add = (a, b) => a + b;
  
  // console.log(add(5, 3));
   // Output: 5

//   Classes
// Classes in JavaScript provide a way to create objects and handle inheritance.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Wasi', 18);
  const person2 = new Person('Qavi', 21);
  person1.greet(); 
  person2.greet(); 
  
  class Animal {
    constructor(name, sound, country) {
      this.name = name;
      this.sound = sound;
      this.country = country;
    }
  
    makeSound() {
      console.log(`${this.name} says ${this.sound} It ${this.name} is blog to ${this.country} `);
    }
  }

  const animal1 = new Animal('Tom', 'Woof', 'Pakistan');
  animal1.makeSound();
  
//   Callback Functions
// Callback functions are passed as arguments to other functions and executed after some operation is completed.

// const fetchData = (callback) => {
//     setTimeout(() => {
//       const data = { user: 'Qavi', age: 21 };
//       callback(data);
//     }, 2000);
//   };
  
//   fetchData((data) => {
//     console.log(data);
//   });
  
  // Output after 2 seconds: { user: 'Qavi', age: 21 }
  

// console.log(add(15, 3)); 
// Output: 8
// console.log(subtract(25, 5));
 // Output: 2



