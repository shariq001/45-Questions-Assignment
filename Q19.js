/*      Question 19
Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner. */
var frnds = ["Haseeb", "Muhib", "Adeel", "Usman", "Shariq"];
console.log("I am inviting ".concat(frnds.length, " number of friends to my dinner which are following.\n"));
for (var i = 0; i < frnds.length; i++) {
    console.log("".concat(i + 1, ". ").concat(frnds[i]));
}
