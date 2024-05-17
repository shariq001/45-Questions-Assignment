/*      Question 44
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time. */

function mySandwich(...items: string []) {
    return `I want sandwich of ${items}`;
};
let collection1 = mySandwich("Ham", " Cheese", " Lettuce")
let collection2 = mySandwich("Turkey", "Swiss")
let collection3 = mySandwich();
console.log(collection1);
console.log(collection2);
console.log(collection3);
// ---------------------------------------------------------------------------//
















