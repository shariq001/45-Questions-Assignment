/*      Question 36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
that should be printed on the shirt. The function should print a sentence summarizing 
the size of the shirt and the message printed on it. Call the function. */

function make_shirt(size: number, label: string) {
    return `My shirt size is ${size} and label is ${label}`
}
let myshirt = make_shirt(36, "Believe in YourSelf");

// how to print on console
console.log(myshirt);

// Arrow function
let myfun = (size: number, label: string) => {
    return `My shirt size is ${size} and label is ${label}`
}
console.log(myfun(34, " No one owns you"));
// -----------------------------------------------------------------------------------//
















