/*      Question 41
Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
var magicians = ["John", "James", "Wicky", "Sam"];
function show_magicians() {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var names = magicians_1[_i];
        console.log(names);
    }
}
show_magicians(); // Calling the function
show_magicians(); // Calling the funciton 2
