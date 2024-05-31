// "Use strict"

let carName = "Volvo";

console.log(carName)

let firstName = "John", lastName = "Doe", age = 35 ;

let x1 = 10;
let y = 5;
console.log( x1 * y)

let length = 16 ; // number
console.log(typeof length)

let LastName = "Johnson";  // string 
console.log(typeof LastName)

const x2 = {
    firstName: "John",
    lastName: "Doe"
} ;  // object

console.log(typeof x2)


function myFunction(){
  return "Hello World!"
}
//  alert(myFunction())

const person = {
    name:"John",
    age:50
}
// alert(person.name + " is " + person.age)

const cars = ["Volvo", "Jeep", "Mercedes"];

// alert(cars.length)

const Brand = ["Volvo", "Jeep", "Mercedes"]
Brand[0] = "Ford";
console.log(Brand)


let random = Math.random();
console.log(random)

let max = Math.max(10,20);
console.log(max)

let square = Math.sqrt(9);
console.log(square)


let x3 = 10;
let y1 = 5;
if (x3 > y1) {
    // alert(true);
}

let age1 = 18;
let message = age1 < 18 ? "Too young" :"Old enough"

console.log(message)
