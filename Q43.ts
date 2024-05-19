/* Question 43
Unchanged Magicians: Start with your work from Exercise 42. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name. */

let Great_magicians = ["John", "James", "Wicky", "Sam"]

// making a copy of this array
let Great_magiciansCopy = [...Great_magicians];

function make_great(Great: string) {
    let withGreetings = "";
    for(let name of Great_magiciansCopy) {
        withGreetings += `${Great} ${name}\n`
    }
    return withGreetings
}
let myGreetings = make_great("Hello")
let makeArray = myGreetings.split(`\n`)
console.log(makeArray);

console.log(Great_magicians);
// ------------------------------------------------------------------//
















