/*      Question 18
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its order has changed. */

let places = ["Makkah", "Madina", "Baghdad", "Palestine", "Kashmir"];
console.log(places);

// Alphabetical Order
let copyofArray = places.slice();
let sortedArray = copyofArray.sort();
console.log(sortedArray);

// Printing original Array
console.log(places);

// Reverse Alphabetical Order
let copyofArray2 = places.slice();
let reverseofArray = copyofArray2.reverse();
console.log(reverseofArray);

// Printing original Array
console.log(places);

// Reverse the order of original array
let reverseOriginalArray = places.reverse();
console.log(reverseOriginalArray);

let againreverse = reverseOriginalArray.reverse();
console.log(againreverse);

// Sorting original Array
let sortofArray = places.sort();
console.log(sortofArray);

// Reverse Sorted Array
let reversesortedArray = sortofArray.reverse();
console.log(reversesortedArray);
// -----------------------------------------------------//