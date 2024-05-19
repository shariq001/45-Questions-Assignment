/* Question 43
Unchanged Magicians: Start with your work from Exercise 42.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Great_magicians = ["John", "James", "Wicky", "Sam"];
// making a copy of this array
var Great_magiciansCopy = __spreadArray([], Great_magicians, true);
function make_great(Great) {
    var withGreetings = "";
    for (var _i = 0, Great_magiciansCopy_1 = Great_magiciansCopy; _i < Great_magiciansCopy_1.length; _i++) {
        var name_1 = Great_magiciansCopy_1[_i];
        withGreetings += "".concat(Great, " ").concat(name_1, "\n");
    }
    return withGreetings;
}
var myGreetings = make_great("Hello");
var makeArray = myGreetings.split("\n");
console.log(makeArray);
console.log(Great_magicians);
