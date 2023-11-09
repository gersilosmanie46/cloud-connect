/**
 * filename: complexCodeExample.js
 * 
 * This JavaScript file contains a complex and elaborate code example.
 * It is designed to showcase advanced programming concepts and demonstrate
 * the use of various features in the JavaScript language.
 */

// Declare a class called "Person"
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Define a method to calculate the birth year
  calculateBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

// Create an array of objects of type Person
const people = [
  new Person("John", 25),
  new Person("Emily", 32),
  new Person("Michael", 41),
];

// Define a function to filter people based on their age
function filterPeopleByAge(people, minAge, maxAge) {
  return people.filter(person => person.age >= minAge && person.age <= maxAge);
}

// Use the filter function to get people between ages 30 and 40
const filteredPeople = filterPeopleByAge(people, 30, 40);

// Declare a variable to store the total age of filtered people
let totalAge = 0;

// Calculate the total age of filtered people
filteredPeople.forEach(person => {
  totalAge += person.age;
});

// Print the total age to the console
console.log(`Total age of filtered people: ${totalAge}`);

// Define a class to represent a Shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  calculateArea() {
    throw new Error("Abstract method calculateArea() must be implemented by subclasses.");
  }
}

// Create a subclass Square that inherits from Shape
class Square extends Shape {
  constructor(sideLength) {
    super("Square");
    this.sideLength = sideLength;
  }

  calculateArea() {
    return Math.pow(this.sideLength, 2);
  }
}

// Create a subclass Circle that inherits from Shape
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Create instances of Square and Circle
const square = new Square(5);
const circle = new Circle(3);

// Calculate and print the areas of the square and circle
console.log(`Area of the square: ${square.calculateArea()}`);
console.log(`Area of the circle: ${circle.calculateArea()}`);

// Define a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate and print the factorial of 5
console.log(`Factorial of 5: ${factorial(5)}`);

// Define a generator function to generate Fibonacci sequence
function* fibonacciSequence() {
  let current = 0, next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

// Create a Fibonacci sequence generator
const fibonacciGenerator = fibonacciSequence();

// Generate the first 10 numbers in the Fibonacci sequence
const fibonacciNumbers = [];
for (let i = 0; i < 10; i++) {
  fibonacciNumbers.push(fibonacciGenerator.next().value);
}

// Print the generated Fibonacci numbers
console.log("Fibonacci Sequence:");
console.log(fibonacciNumbers);

// Implement a closure to create a counter function
function createCounter() {
  let count = 0;
  
  return () => {
    count++;
    console.log(`Count: ${count}`);
  };
}

// Create instances of the counter function
const counterA = createCounter();
const counterB = createCounter();

// Increment and print the counts
counterA();
counterA();
counterB();
counterA();
counterB();
counterB(); 

// Implement an async function with error handling
async function exampleAsyncFunction() {
  try {
    console.log("Start of async function");
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log(error.message);
  }
}

// Call the async function
exampleAsyncFunction();