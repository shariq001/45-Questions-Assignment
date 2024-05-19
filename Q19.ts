/*      Question 19 
Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner. */

let frnds = ["Haseeb", "Muhib", "Adeel", "Usman", "Shariq"]

console.log(`I am inviting ${frnds.length} number of friends to my dinner which are following.\n`);

for (let i = 0; i< frnds.length; i ++){
    console.log(`${i + 1}. ${frnds[i]}`)
};
// -----------------------------------------------------------//