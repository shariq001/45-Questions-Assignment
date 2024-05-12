/*      Question 24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one 
False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

// equality and unequality | With lower case
let name1 = "Muhammad"
console.log(name1 == "Muhammad"); // true
console.log(name1 !== "muhammad"); // true    (!==) is not equal to 

// Numerics
let num1 = 6;
console.log(num1 == 6); // true
console.log(num1 !== 6); // false
console.log(num1 > 5); // true
console.log(num1 < 5); // false
console.log(num1 <= 5); // false
console.log(num1 >= 5); // true

// and && (if a single statement is false it shows false)
let num2 = 10;
let num3 = 5;
console.log(num2 > 9 && num3 < 5); // 

// or || (If a single statement is true it shows true)
let num4 = 10;
let num5 = 5;
console.log(num4 < 13 || num5 > 6);

let array1 = [2, 3, "Adeel"];
let mystring = "Muhib";
console.log(Array.isArray(array1)); // true
console.log(Array.isArray(mystring)); // false
// ------------------------------------------------------------//







