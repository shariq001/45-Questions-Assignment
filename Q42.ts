/*       Question 42
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of 
magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified. */

let Greatmagicians = ["John", "James", "Wicky", "Sam"]
function make_great(Great: string) {
    for(let name of Greatmagicians) {
        console.log(Great, name);
    }
}
make_great(`Great`);
make_great(`How are you Mr.`);
// -------------------------------------------------------------------------//














