/*      Question 23
Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let myCar:string = "Alto"
console.log(myCar == "Alto"); // true
// (=) is used for assigning (==) is used for comparing

// 1
let fruit:String = "Orange"
console.log(fruit == "Orange"); // true
console.log(fruit == "orange"); // false

// 2
let array = [13, 3, 9]
console.log(array.length == 3); // true
console.log(array.length == 5); // false

//3
let student:string = "Adeel"
console.log(student == "Adeel"); // true
console.log(student == "Ali"); // false

//4
let bike:string = "Honda"
console.log(bike == "Honda"); // true
console.log(bike == "Unique"); // true

//5
let lang:string = "Urdu"
console.log(lang == "Urdu"); // true
console.log(lang == "English"); // false
// -----------------------------------------------------------------------//