/*Question 13
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several
examples. Use your list to print a series of statements about these itmes, such as
"I would like to ouwn a Honda motorcycle." */
var myTrans = ["Car", "Bus", "Bike", "Train", "Aeroplane"];
// 1st method (loop)
for (var i = 0; i < myTrans.length; i++) {
    console.log("I would like to own a ".concat(myTrans[i]));
}
// 2nd method 
myTrans.map(function (ib) {
    console.log("I would like to own a ".concat(ib));
});
// ----------------------------------------------------------//
