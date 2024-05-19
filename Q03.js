/* Question 3
Name Cases: Store a person's name in a variable, and then print that person's
 name in lowercase, uppercase, and titlecase: */
var personname = "Shariq";
// ~~ Lower Case
console.log(personname.toLocaleLowerCase());
// ~~ Upper Case
console.log(personname.toUpperCase());
// ~~ Title Case
var firstletter = personname.charAt(0).toUpperCase();
var restletters = personname.slice(1).toLocaleLowerCase();
var TitleCase = firstletter + restletters;
console.log(TitleCase);
// ---------------------------------------------------------------------//
