/*      Question 3
Name Cases: Store a person's name in a variable, and then print that person's
 name in lowercase, uppercase, and titlecase: */

 const personname:string = "Shariq";

 // ~~ Lower Case
 console.log(personname.toLocaleLowerCase());
 // ~~ Upper Case
 console.log(personname.toUpperCase());
 // ~~ Title Case
 let firstletter:string = personname.charAt(0).toUpperCase();
 let restletters:string = personname.slice(1).toLocaleLowerCase();
 let TitleCase:any = firstletter + restletters
 console.log(TitleCase);
// ---------------------------------------------------------------------//