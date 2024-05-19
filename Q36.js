/*      Question 36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
that should be printed on the shirt. The function should print a sentence summarizing
the size of the shirt and the message printed on it. Call the function. */
function make_shirt(size, label) {
    return "My shirt size is ".concat(size, " and label is ").concat(label);
}
var myshirt = make_shirt(36, "Believe in YourSelf");
// how to print on console
console.log(myshirt);
// Arrow function
var myfun = function (size, label) {
    return "My shirt size is ".concat(size, " and label is ").concat(label);
};
console.log(myfun(34, " No one owns you"));
