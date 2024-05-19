/*      Question 16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end 
of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. */

const my_Frnds:string [] = ["Adeel", "Muhib", "Haseeb", "Usman"];
console.log(my_Frnds)

console.log(`we have 3 more friends to invite on dinner\n`)

// Adding guest to beginning
my_Frnds.unshift("Mustafa")
console.log(my_Frnds)
// ["Mustafa", "Adeel", "Muhib", "Haseeb", "Usman"]

// Adding at middle
my_Frnds.splice(2, 0, "Shariq")
console.log(my_Frnds);

// Adding at last
my_Frnds.push("Ahmed")
console.log(my_Frnds);

// Print all friends with message
for(let i = 0; i < my_Frnds.length; i++){
    console.log(`Mr. ${my_Frnds[i]}, you are invited to my dinner.`)
}
// ----------------------------------------------------------------//